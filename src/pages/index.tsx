import React from 'react'
import About from '../components/About'
import Jumbotron from '../components/jumbotron'
import Projects from '../components/Projects'
import Container from '../components/shared/Container'
import SEO from '../components/shared/Seo'
import '../styles/base.css'

const App = () => {
  return (
    <>
      <SEO title="Chanon Roy" />
      <Container>
        <Jumbotron />
        <Projects />
        <About />
      </Container>
    </>
  )
}

export default App
