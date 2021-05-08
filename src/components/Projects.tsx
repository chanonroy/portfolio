import React from 'react'
import styled from 'styled-components'
import { Breakpoints } from '../@types/types'
import Title from './Title'

const projects = [
  {
    img: 'snake.png',
    alt: 'snakes',
    title: 'React Snake Game',
    subtitle: 'Eat food, grow your tail, and avoid crashing into yourself',
    url: 'https://roy-react-snake.vercel.app/',
  },
  {
    img: 'drive.png',
    alt: 'roadtrip-roulette',
    title: 'Roadtrip Roulette',
    subtitle:
      'Experience drives from across the world to the sounds of local radio',
    url: 'https://triproulette.vercel.app',
  },
  {
    img: 'catdog.png',
    alt: 'cats and dogs',
    title: 'Cat / Dog Classifier',
    subtitle: 'Animal image classification with Convolutional Neural Networks',
    url: 'https://www.kaggle.com/chanonroy/cat-dog-ml-basic',
  },
  {
    img: 'raycaster.png',
    alt: 'ray',
    title: 'React Raycasting',
    subtitle: '2D to 3D maze Raycasting inspired by Wolfeinstein 3D',
    url: 'https://react-raycasting.vercel.app/',
  },
  {
    img: 'bananas.png',
    alt: 'bananas',
    title: 'Banana Classifier',
    subtitle: 'Ripeness classification from a limited dataset',
    url: 'https://github.com/chanonroy/banana-classifier/blob/main/train.ipynb',
  },
]

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 200px;
  @media (max-width: ${`${Breakpoints.Medium}px`}) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 80px;
  }
  @media (max-width: ${`${Breakpoints.xSmall}px`}) {
    grid-template-columns: 1fr;
    margin-bottom: 40px;
  }
`

const Square = ({ image, url }: { image: string; url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 230,
          width: '100%',
          borderRadius: 5,
          opacity: 1,
          cursor: 'pointer',
          marginBottom: 20,
        }}
      ></div>
    </a>
  )
}

const Projects = () => {
  return (
    <>
      <Title>Side projects</Title>
      {/* <TabBar
        topics={['Coding', 'Articles', 'Artwork']}
        activeTopic={activeTopic}
        onClick={setActiveTopic}
      /> */}
      <ProjectsGrid>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <Square
                key={idx}
                image={`/images/${project.img}`}
                url={project.url}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginBottom: 8,
                }}
              >
                {project.title}
              </div>
              <div
                style={{
                  color: 'darkgrey',
                  textAlign: 'center',
                  fontSize: 14,
                }}
              >
                {project.subtitle}
              </div>
            </div>
          )
        })}
      </ProjectsGrid>
    </>
  )
}

export default Projects
