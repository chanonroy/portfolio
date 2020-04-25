import styled from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    max-width: 750px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default Container;
