import React, { Component } from 'react';
import glamorous from 'glamorous';

const HeroContainer = glamorous.section({
  padding: '50px 30px',
  margin: 0,
  '@media(min-width: 768px)': {
    padding: '100px 75px',
  },
  '@media(min-width: 1024px)': {
    padding: '200px 100px',
  }
},
  ({background}) => ({ background: background ? `url(${background})` : 'white'}),
  ({backgroundGradient}) => ({ background: backgroundGradient }),
);


const HeroSection = (props) => {
  console.log(props);

  return(
    <HeroContainer
      background = {props.background}
      backgroundGradient = {props.backgroundGradient}
    >
      {props.children}
    </HeroContainer>
  );
};

export default HeroSection;
