import React from 'react';

import stylesUtilsService from '../../services/stylesUtilsService'

import HeroSection from '../../components/HeroSection';
import H1 from '../../components/Heading/Heading1';
import H3 from '../../components/Heading/Heading3';


const Home = props => {
  const color1 = '#085078';
  const color2 = '#85D8CE';

  return (
    <main>
      <HeroSection
        backgroundGradient={stylesUtilsService.gradient({color1, color2})} >
        <H1
          color = 'white'
          textAlign = 'center'
          text = 'HOT GRAPHS REACTJS' />
        <H3
          color = 'white'
          textAlign = 'center'
          text = 'Enjoy your generator!'
          margin = '20px 0 0 0' />
      </HeroSection>
    </main>
  );
}

export default Home;
