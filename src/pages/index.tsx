import React from 'react';
import Jumbo from '../components/jumbo';
import Profile from '../components/profile';
import Layout from '../components/shared/layout';
import SEO from '../components/shared/seo';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Projects from '../components/projects';
import Interests from '../components/interests';
import Footer from '../components/footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Chanon Roy" />
    <Jumbo />
    <Profile />
    <Skills />
    <Contact />
    <Projects />
    <Interests />
    <Footer />
  </Layout>
);

export default IndexPage;
