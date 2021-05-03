import React, { useState } from 'react'
import TabBar from './shared/TabBar'
import Title from './Title'
import snakesImg from '../images/snake.png'
import driveImg from '../images/drive.png'
import raycasterImg from '../images/raycaster.png'
import catDogImg from '../images/catdog.png'
import bananasImg from '../images/bananas.png'

const projects = [
  {
    img: snakesImg,
    alt: 'snakes',
    description: 'An implementation of the classic game',
    subtitle: 'React, HTML Canvas, Next.js',
    url: 'https://roy-react-snake.vercel.app/',
  },
  {
    img: driveImg,
    alt: 'trip-roulette',
    description: 'Find your next holiday at random',
    subtitle: 'React, YouTube, React-Spring',
    url: 'https://triproulette.vercel.app',
  },
  {
    img: catDogImg,
    alt: 'cats and dogs',
    description: 'Animal classification with CNN',
    subtitle: 'Tensorflow, Keras, Jupyter Notebook',
    url: 'https://www.kaggle.com/chanonroy/cat-dog-ml-basic',
  },
  {
    img: raycasterImg,
    alt: 'ray',
    description: '3D rendering from a 2D maze',
    subtitle: 'React, Next.js, JavaScript',
    url: 'https://react-raycasting.vercel.app/',
  },
  {
    img: bananasImg,
    alt: 'bananas',
    description: 'Ripeness classifier from limited dataset',
    subtitle: 'Tensorflow, Keras, Jupyter Notebook',
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
        }}
      ></div>
    </a>
  )
}

const Projects = () => {
  const [activeTopic, setActiveTopic] = useState('All')
  return (
    <>
      <Title>My projects</Title>
      <TabBar
        topics={['All', 'Coding', 'Articles', 'Artwork']}
        activeTopic={activeTopic}
        onClick={setActiveTopic}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridGap: 40,
          marginBottom: 80,
        }}
      >
        {projects.map((project, idx) => {
          return <Square key={idx} image={project.img} url={project.url} />
        })}
      </div>
    </>
  )
}

export default Projects
