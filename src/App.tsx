import React from 'react';
import Container from './components/Container';
import Jumbo from './components/Jumbo';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Jumbo />
      <Projects />
      <Contact />
      <About />
      <Footer />
    </Container>
  );
}

export default App;
