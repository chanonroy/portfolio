import React from 'react'
import styled from 'styled-components'
import { Breakpoints } from '../@types'
import Title from './Title'
import canadaImg from "../images/about/canada.svg"
import guitarImg from "../images/about/guitar.svg"
import interfaceImg from "../images/about/interface.svg"

const aboutItems = [
  {
    text: "I'm currently focused on web and mobile app development",
    img: interfaceImg,
    alt: "current-focus"
  },
  {
    text: "I've lived across the world, but my hometown is Ottawa, Canada",
    img: canadaImg,
    alt: "canada"
  },
  {
    text: 'On the side, I play classical guitar and obsess over film studies',
    img: guitarImg,
    alt: "guitar"
  },
]

const AboutContainer = styled.div`
  margin-bottom: 200px;
  @media (max-width: ${`${Breakpoints.Small}px`}) {
    margin-bottom: 80px;
  }
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: ${`${Breakpoints.Medium}px`}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${`${Breakpoints.xSmall}px`}) {
    grid-template-columns: 1fr;
  }
`

const About = () => {
  return (
    <AboutContainer>
      <Title>More about me</Title>
      <AboutGrid>
        {aboutItems.map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div>
              <img
                src={item.img}
                style={{ width: 80, marginBottom: 30 }}
                alt=""
              />
            </div>
            <div style={{ color: 'darkgrey' }}>{item.text}</div>
          </div>
        ))}
      </AboutGrid>
    </AboutContainer>
  )
}

export default About
