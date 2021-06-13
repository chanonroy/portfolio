import styled from "styled-components"
import { Breakpoints, Colors } from "../@types";

const HorizontalLine = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 20px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${Colors.light};
  font-size: 15px;
  @media (max-width: ${`${Breakpoints.Medium}px`}) {
    flex-direction: column;
    text-align: center;
  }
`

export default function Footer() {
  return (
    <footer style={{ marginBottom: 100 }}>
      <HorizontalLine />
      <FooterContainer>
        <div style={{ marginBottom: 10 }}>
          Special thanks to FreePik and Wannathis for icon support
        </div>
        <div>Made by Chanon Roy</div>
      </FooterContainer>
    </footer>
  )
}
