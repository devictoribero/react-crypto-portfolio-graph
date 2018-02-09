import React, { Component } from 'react';
import glamorous from 'glamorous';

import HeroSection from '../../components/HeroSection/index';
import H1 from '../../components/Heading/Heading1';
import H2 from '../../components/Heading/Heading2';


const Home = () => {
  const _heroImage = 'https://images7.alphacoders.com/411/thumb-1920-411820.jpg';
  const bg1 = '#085078';
  const bg2 = '#85D8CE';
  const backgroundGradient = `linear-gradient(90deg, ${bg1}, ${bg2})`
  return (
    <main>
      <HeroSection
        background = {_heroImage}
        backgroundGradient={backgroundGradient}
        >
        <H1
          color = 'white'
          textAlign = 'center'
          text = 'This repo permits you te create graphs customly in a hot way' />

        <H2
          color = 'white'
          textAlign = 'center'
          text = 'Enjoy your generator!' />

      </HeroSection>
    </main>
  );
}

export default Home;
