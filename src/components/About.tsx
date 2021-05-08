import React from 'react'
import useWindowSize from '../hooks/use-window-size'
import getColumns from '../utils/getColumns'
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

const About = () => {
  const { width: screenWidth } = useWindowSize()

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
              <img
                src={`/images/${item.img}`}
                style={{ width: 80, marginBottom: 30 }}
              />
            </div>
            <div style={{ color: 'darkgrey' }}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
