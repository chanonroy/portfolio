import React from 'react'
import styled from 'styled-components'
import { Breakpoints } from '../@types/types'
import Title from './Title'

const aboutItems = [
  {
    text: "I'm currently focused on building digital products at Wealthsimple",
    img: 'wealthsimple.png',
  },
  {
    text: "I've lived across the world, but my hometown is Ottawa, Canada",
    img: 'canada.svg',
  },
  {
    text: 'On the side, I play classical guitar and obsess over film analysis',
    img: 'guitar.svg',
  },
]

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
    <div style={{ marginBottom: 200 }}>
      <Title>More about me</Title>
      <AboutGrid>
        {aboutItems.map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div>
              <img
                src={`/images/${item.img}`}
                style={{ width: 80, marginBottom: 30 }}
              />
            </div>
            <div style={{ color: 'darkgrey' }}>{item.text}</div>
          </div>
        ))}
      </AboutGrid>
    </div>
  )
}

export default About
