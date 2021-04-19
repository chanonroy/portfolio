import React from 'react'
import styled from 'styled-components'
import Container from '../shared/container'

import rulerImg from '../../images/ruler.svg'
import designImg from '../../images/design.svg'
import serverImg from '../../images/server.svg'
import mobileImg from '../../images/mobile.svg'
import webImg from '../../images/web.svg'
import circuitImg from '../../images/circuit.svg'
// import Title from '../../shared/title'

const skills = [
  {
    title: 'UI Development',
    subItems: [
      'Design System',
      'Flexbox, CSS Grid',
      'Styled Components, Emotion',
    ],
    img: designImg,
  },
  {
    title: 'Web Apps',
    subItems: [
      'React, Vue.js',
      'Django, Next.js, Gatsby',
      'Apollo Client, TypeScript',
    ],
    img: webImg,
  },
  {
    title: 'Mobile Apps',
    subItems: ['React Native, Expo', 'iOs, Android'],
    img: mobileImg,
  },
  {
    title: 'Product Design',
    subItems: ['Adobe Suite, Sketch', 'User Research', 'A/B Testing'],
    img: rulerImg,
  },
  {
    title: 'API Design',
    subItems: ['Node, Express', 'REST, GraphQL (Apollo)', 'Auth and Security'],
    img: serverImg,
  },
  {
    title: 'Machine Learning',
    subItems: [
      'Tensorflow, Keras',
      'Python, Jupyter Notebook',
      'Neural Networks',
    ],
    img: circuitImg,
  },
]

const SkillsCard = styled.div`
  padding: 80px 0;
  background-color: white;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    padding: ${({ theme }) => `${theme.spacing.sm}px 0`};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: ${({ theme }) => `${theme.breakpoints.xs}px`}) {
    grid-template-columns: 1fr 1fr;
  }
`

const Item = styled.div`
  text-align: center;
  margin-bottom: 80px;

  img {
    width: 100px;
  }

  h2 {
    margin: 20px 0;
  }

  h4 {
    color: grey;
    font-weight: 400;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    margin-bottom: ${({ theme }) => `${theme.spacing.sm}px`};

    img {
      width: 75px;
    }

    h2 {
      font-size: 0.9em;
      margin: 10px 0;
    }

    h4 {
      font-size: 0.7em;
      margin: 0;
    }
  }
`

const Skills = () => {
  return (
    <SkillsCard>
      <Container>
        {/* <Title> Some things that I have done </Title> */}
        <Grid>
          {skills.map((skill, i) => (
            <Item key={`${i}-${skill.title}`}>
              <img src={skill.img} alt={skill.title} />
              <h2> {skill.title} </h2>
              {skill.subItems.map((item) => (
                <h4 key={item}> {item} </h4>
              ))}
            </Item>
          ))}
        </Grid>
      </Container>
    </SkillsCard>
  )
}

export default Skills
