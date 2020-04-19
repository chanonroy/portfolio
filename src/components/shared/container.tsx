import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    width: 750px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    width: 970px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.lg}px`}) {
    width: 1170px;
  }
`;

export default Container;
