import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => `${theme.spacing.md}px`};

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    margin-bottom: ${({ theme }) => `${theme.spacing.sm}px`};
    font-size: 1.7em;
  }
`

export default Title
