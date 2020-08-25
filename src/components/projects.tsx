import React from 'react';
import styled from 'styled-components';
import Container from './shared/container';

import snakesImg from '../images/snake.jpg';
import rebalanceImg from '../images/rebalance.jpg';
import catDogImg from '../images/catdog.jpg';
import Title from './shared/title';

const ProjectSection = styled.div`
  background-color: white;
  padding: 80px 0;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    padding: ${({ theme }) => `${theme.spacing.sm}px 0`};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 80px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  }
`;

const GridItem = styled.div`
  text-align: center;
  margin-bottom: 48px;

  img {
    border-radius: 5px;
    width: 100%;
    margin-bottom: 12px;
    transition: ${({ theme }) => theme.transition.normal};
    &:hover {
      opacity: 0.8;
    }
  }
  div {
    font-size: 1.1em;
    font-weight: bold;
  }
  p {
    margin: 8px 0;
    color: grey;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
    margin-bottom: 0px;

    div {
      display: none;
      font-size: 0.9em;
    }
    img {
      margin-bottom: 4px;
    }
    p {
      display: none;
      margin: 0;
      font-size: 0.7em;
    }
  }
`;

const projects = [
  {
    img: snakesImg,
    alt: 'snakes',
    description: 'An implementation of the classic game',
    subtitle: 'React, HTML Canvas, Next.js',
    url: 'https://roy-react-snake.vercel.app/',
  },
  {
    img: catDogImg,
    alt: 'cats and dogs',
    description: 'Cat vs. Dog image classification',
    subtitle: 'Tensorflow, Keras, Jupyter Notebook',
    url: 'https://www.kaggle.com/chanonroy/cat-dog-ml-basic',
  },
  {
    img: rebalanceImg,
    alt: 'coins',
    description: 'Rebalance your investing portfolio',
    subtitle: 'React, Webpack, JavaScript',
    url: 'https://github.com/chanonroy/portfolio-rebalancer',
  },
];

const Projects = () => {
  return (
    <ProjectSection>
      <Container>
        <Title>Some of my side projects</Title>
        <Grid>
          {projects.map((project, i) => (
            <GridItem key={`${i}-${project.alt}`}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.alt} />
              </a>
              <div> {project.description} </div>
              <p> {project.subtitle} </p>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </ProjectSection>
  );
};

export default Projects;
