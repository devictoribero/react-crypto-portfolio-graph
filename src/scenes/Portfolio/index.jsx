import React, {Fragment } from 'react';

import initializer from '../../initializers/initializer';
import cryptoDataProvider from '../../Provider/cryptoDataProvider';
import stylesUtilsService from '../../services/stylesUtilsService';
import cryptoDataService from '../../services/cryptoDataService';
import calculatorService from '../../services/calculatorService';

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
        backgroundGradient={stylesUtilsService.gradient({ color1, color2 })} >
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
        portfolio={initializer.portfolio}
        cryptoDataProvider={cryptoDataProvider}
        cryptoDataService={cryptoDataService}
        calculatorService={calculatorService}
      />
    </Fragment>
  );
}

export default Portfolio;
