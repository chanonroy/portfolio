import React from 'react';
import styled from 'styled-components';
import Container from './shared/container';

import snakesImg from '../images/snake.jpg';
import dogsImg from '../images/dogs.png';
import rebalanceImg from '../images/rebalance.jpg';
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
    grid-template-columns: 1fr;
    grid-column-gap: 40px;
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
`;

const projects = [
  {
    img: snakesImg,
    alt: 'snakes',
    description: 'An implementation of the classic game',
    subtitle: 'React, HTML Canvas, Firebase',
    url: 'https://react-snake.firebaseapp.com/',
  },
  {
    img: dogsImg,
    alt: 'dogs',
    description: 'Dog breed image classification',
    subtitle: 'Tensorflow, Keras, Jupyter Notebook',
    url:
      'https://github.com/chanonroy/keras-dog-classifier/blob/master/train/predict.ipynb',
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
