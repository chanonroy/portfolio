import Contact from "./components/Contact";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Projects from "./components/Projects";

function App() {
  return (
    <Container>
      <Jumbo />
      <Projects />
      <Contact />
      {/* <About /> */}
      <Footer />
    </Container>
  );
}

export default App;
