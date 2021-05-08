import Head from 'next/head'
import React from 'react'
import About from '../components/About'
import Jumbotron from '../components/Jumbotron'
import Projects from '../components/Projects'
import Container from '../components/shared/Container'

const App = () => {
  return (
    <>
      <Head>
        <title>Chanon Roy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/roy.png" />
      </Head>
      <Container>
        <Jumbotron />
        <Projects />
        <About />
      </Container>
    </>
  )
}

export default App
