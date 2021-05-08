import styled from 'styled-components'
import { Breakpoints } from '../@types/types'

const StyledContainer = styled.div`
  max-width: 550px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  @media (min-width: ${`${Breakpoints.Small}px`}) {
    max-width: 700px;
    padding-left: 0;
    padding-right: 0;
  }
  @media (min-width: ${`${Breakpoints.Medium}px`}) {
    max-width: 800px;
    padding-left: 0;
    padding-right: 0;
  }
`

export default StyledContainer
