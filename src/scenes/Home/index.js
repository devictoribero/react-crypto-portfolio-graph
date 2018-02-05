import React, { Component } from 'react';
import glamorous from 'glamorous';

import HeroSection from '../../components/HeroSection/index';
import H1 from '../../components/Heading/index';


const Home = () => {
  const _heroImage = 'https://images7.alphacoders.com/411/thumb-1920-411820.jpg';

  return (
    <main>
      <HeroSection background={_heroImage}>
        <H1
          fontSize = '30px'
          color = 'white'
          textAlign = 'center'
          text='This repo permits you te create graphs customly' />
        <h2>So feel free tvoy ao create your content and use it in your site</h2>
      </HeroSection>
    </main>
  );
}

export default Home;
