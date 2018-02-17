import React, {Fragment } from 'react';

import initializer from '../../initializers/initializer';
import PortfolioDataGiver from '../../services/PortfolioDataGiver';
import StylesUtils from '../../services/StylesUtils';

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
        backgroundGradient={StylesUtils.gradient({ color1, color2 })} >
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
        PortfolioDataGiver={PortfolioDataGiver}
      />
    </Fragment>
  );
}

export default Portfolio;
