import React, { ReactNode } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../styles/theme';

interface LayoutProps {
  children: ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.5em;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    a {
     color: inherit;
     text-decoration: none;
    }
    h1, h2 {
      line-height: 1.5;
      margin-top: 0;
    }
  }
`;

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle theme={theme} />
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  </>
);

export default Layout;
