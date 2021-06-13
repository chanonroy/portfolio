import styled from "styled-components";
import { Breakpoints } from "../@types";
import { Email } from "@styled-icons/material/Email"
import drinksImg from "../images/contact/drinks.svg"

const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: #547BAD;
  width: 100%;
  height: 375px;
  padding: 40px;
  margin-bottom: 200px;
  border-radius: 5px;
  box-sizing: border-box;
  @media (max-width: ${`${Breakpoints.Small}px`}) {
    height: 450px;
    margin-bottom: 80px;
  }
`;

const Header = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Image = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 200px;
  @media (max-width: ${`${Breakpoints.xSmall}px`}) {
    height: 150px;
  }
`

export default function Contact() {
  return (
    <Wrapper>
      <div>
        <Header>Interested in chatting?</Header>
        <div style={{ color: "white", marginBottom: 20 }}>
          Send me an email or message and let’s chat over your favourite beverage.
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Email size="20" color="white" style={{ marginRight: 5 }} />
          <div style={{ color: "white" }}>

            chanonroy@gmail.com
            </div>
        </div>
      </div>
      <Image src={drinksImg} />
    </Wrapper>
  )
}
