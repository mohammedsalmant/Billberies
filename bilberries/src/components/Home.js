import React from 'react';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import Poster from './Heading/Poster';
import Navbar from './Navbar/Navbar';
import Queries from './Queries/Queries';

function Home() {
  return (
    <>
    <Navbar/>
    <Poster/>
    <Content/>
    <Queries/>
    <Footer/>
  </>
  );
}

export default Home;
