import React from 'react'
import Title from './shared/Title'
import wealthsimpleImg from '../images/wealthsimple.png'
import canadaImg from '../images/canada.svg'
import guitarImg from '../images/guitar.svg'
import getColumns from '../utils/getColumns'
import useWindowDimensions from '../hooks/use-window-dimensions'

const aboutItems = [
  {
    text: "I'm currently focused on building digital products at Wealthsimple",
    img: wealthsimpleImg,
  },
  {
    text: "I've lived across the world, but my hometown is Ottawa, Canada",
    img: canadaImg,
  },
  {
    text: 'On the side, I play classical guitar and obsess over film analysis',
    img: guitarImg,
  },
]

const About = () => {
  const { width: screenWidth } = useWindowDimensions()

  return (
    <div style={{ marginBottom: 200 }}>
      <Title>More about me</Title>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: getColumns(screenWidth),
          gap: 20,
        }}
      >
        {aboutItems.map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div>
              <img src={item.img} style={{ width: 80, marginBottom: 30 }} />
            </div>
            <div style={{ color: 'darkgrey' }}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
