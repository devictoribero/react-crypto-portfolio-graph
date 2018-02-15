import React, { Component, Fragment } from 'react';
import glamorous from 'glamorous';

import initializer from '../../initializers/initializer';
import StylesUtilsService from '../../services/StylesUtilsService';
import CryptoDataService from '../../services/CryptoDataService';
import CalculatorService from '../../services/CalculatorService';

import HeroSection from '../../components/HeroSection';
import H1 from '../../components/Heading/Heading1';
import H3 from '../../components/Heading/Heading3';
import PortfolioGraphWrapper from '../../components/PortfolioGraphWrapper';


const Portfolio = (props) => {
  const color1 = '#085078';
  const color2 = '#85D8CE';

  return (
    <Fragment>
      <HeroSection
        backgroundGradient={StylesUtilsService.gradient({ color1, color2 })} >
        <H1
          color = 'white'
          textAlign = 'center'
          text = 'THIS IS YOUR PORTFOLIO' />
        <H3
          color = 'white'
          textAlign = 'center'
          text = 'Hope you are winning money'
          margin = '20px 0 0 0' />
      </HeroSection>
      <PortfolioGraphWrapper
        porfolio={initializer.portfolio}
        services={[ CryptoDataService, CalculatorService]}/>
    </Fragment>
  );
}

export default Portfolio;
