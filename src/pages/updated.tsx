import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Projects from '../components/Projects'
import Container from '../components/shared/container'
import SEO from '../components/shared/seo'
import '../styles/base.css'

const Updated = () => {
  return (
    <>
      <SEO title="Chanon Roy" />
      <Container>
        <Jumbotron />
        <Projects />
        {/* <About /> */}
      </Container>
    </>
  )
}

export default Updated
