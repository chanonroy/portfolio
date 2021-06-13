import React from 'react'
import styled from 'styled-components'
import { Breakpoints, Colors } from '../@types/index'
import Title from './Title'
import snakeImg from "../images/projects/snake.png"
import driveImg from "../images/projects/drive.png"
import catDogImg from "../images/projects/catdog.png"
import raycasterImg from "../images/projects/raycaster.png"
import bananasImg from "../images/projects/bananas.png"

const projects = [
  {
    img: snakeImg,
    alt: 'snakes',
    title: 'React Snake Game',
    subtitle: 'Eat food, grow your tail, and avoid crashing into yourself',
    url: 'https://roy-react-snake.vercel.app/',
  },
  {
    img: driveImg,
    alt: 'roadtrip-roulette',
    title: 'Roadtrip Roulette',
    subtitle:
      'Experience drives from across the world to the sounds of local radio',
    url: 'https://triproulette.vercel.app',
  },
  {
    img: catDogImg,
    alt: 'cats and dogs',
    title: 'Cat / Dog Classifier',
    subtitle: 'Animal image classification with Convolutional Neural Networks',
    url: 'https://www.kaggle.com/chanonroy/cat-dog-ml-basic',
  },
  {
    img: raycasterImg,
    alt: 'ray',
    title: 'React Raycasting',
    subtitle: '2D to 3D maze Raycasting inspired by Wolfeinstein 3D',
    url: 'https://react-raycasting.vercel.app/',
  },
  {
    img: bananasImg,
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
    grid-template-columns: 1fr 1fr;
  }
`

const ProjectThumbnail = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 230px;
  width: 100%;
  border-radius: 5px;
  opacity: 1;
  cursor: pointer;
  margin-bottom: 20px;
  @media (max-width: ${`${Breakpoints.xSmall}px`}) {
    height: 150px;
  }
`

const Square = ({ image, url }: { image: string; url: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <ProjectThumbnail image={image} />
    </a>
  )
}

const Projects = () => {
  return (
    <>
      <Title>Side projects</Title>
      <ProjectsGrid>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <Square
                key={idx}
                image={project.img}
                url={project.url}
              />
              <div
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginBottom: 8,
                  color: Colors.dark
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
