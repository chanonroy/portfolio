import React from 'react'
import { Breakpoints } from '../@types/types'
import useWindowDimensions from '../hooks/use-window-dimensions'
import bananasImg from '../images/bananas.png'
import catDogImg from '../images/catdog.png'
import driveImg from '../images/drive.png'
import raycasterImg from '../images/raycaster.png'
import snakesImg from '../images/snake.png'
import Title from './Title'

const projects = [
  {
    img: snakesImg,
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
  const { width: screenWidth } = useWindowDimensions()

  const getColumns = () => {
    if (screenWidth > Breakpoints.Medium) {
      return '1fr 1fr 1fr'
    }
    if (screenWidth > Breakpoints.xSmall) {
      return '1fr 1fr'
    }
    return '1fr'
  }

  return (
    <>
      <Title>My projects</Title>
      {/* <TabBar
        topics={['Coding', 'Articles', 'Artwork']}
        activeTopic={activeTopic}
        onClick={setActiveTopic}
      /> */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: getColumns(),
          gridGap: 40,
          marginBottom: 80,
        }}
      >
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <Square key={idx} image={project.img} url={project.url} />
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
      </div>
    </>
  )
}

export default Projects
