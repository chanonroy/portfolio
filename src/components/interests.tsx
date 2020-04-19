import React from 'react';
import styled from 'styled-components';
import Container from './shared/container';

import gamingImg from '../images/gaming.svg';
import chickenImg from '../images/dish.svg';
import ticketsImg from '../images/tickets.svg';
import globeImg from '../images/globe.svg';
import graphImg from '../images/graph.svg';
import georgeImg from '../images/george.svg';
import taoismImg from '../images/taoism.svg';
import barsImg from '../images/bars.svg';
import Title from './shared/title';

const interests = [
  {
    title: 'Gaming',
    img: gamingImg,
    alt: 'gaming',
  },
  {
    title: 'Cooking',
    img: chickenImg,
    alt: 'chicken',
  },
  {
    title: 'Classic Films',
    img: ticketsImg,
    alt: 'tickets',
  },
  {
    title: 'Languages',
    img: globeImg,
    alt: 'globe',
  },
  {
    title: 'Finance',
    img: graphImg,
    alt: 'graph',
  },
  {
    title: 'World History',
    img: georgeImg,
    alt: 'george-washintgon',
  },
  {
    title: 'Philosophy',
    img: taoismImg,
    alt: 'ying-yang',
  },
  {
    title: 'Data',
    img: barsImg,
    alt: 'graph',
  },
];

const ProjectCard = styled.div`
  background-color: white;
  padding-bottom: 80px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    padding-bottom: ${({ theme }) => `${theme.spacing.sm}px`};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 80px;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
    grid-column-gap: none;
  }
`;

const GridItem = styled.div`
  text-align: center;
  margin-bottom: 80px;

  div {
    font-size: 1.4em;
    font-weight: bold;
  }
  img {
    width: 100px;
    margin-bottom: 20px;
  }
`;

const Interests = () => {
  return (
    <ProjectCard>
      <Container>
        <Title> Some of my hobbies &amp; interests </Title>
        <Grid>
          {interests.map((interest, i) => (
            <GridItem key={`${i}-${interest.alt}`}>
              <img src={interest.img} alt={interest.alt} />
              <div> {interest.title} </div>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </ProjectCard>
  );
};

export default Interests;
