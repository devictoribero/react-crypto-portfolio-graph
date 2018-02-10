import React, { Component } from 'react';
import glamorous from 'glamorous';

import StyleUtilsService from '../../services/StylesUtilsService'

import HeroSection from '../../components/HeroSection/index';
import H1 from '../../components/Heading/Heading1';
import H2 from '../../components/Heading/Heading2';


const Home = props => {
  const color1 = '#085078';
  const color2 = '#85D8CE';
  console.log(this.children);
  return (
    <main>
      <HeroSection
        backgroundGradient={StyleUtilsService.gradient({color1, color2})} >
        <H1
          color = 'white'
          textAlign = 'center'
          text = 'HOT GRAPHS REACTJS' />
        <H2
          color = 'white'
          textAlign = 'center'
          text = 'Enjoy your generator!' />
      </HeroSection>
    </main>
  );
}

export default Home;
