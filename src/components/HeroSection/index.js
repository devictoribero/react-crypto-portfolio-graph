import React, { Component } from 'react';
import glamorous from 'glamorous';

const HeroContainer = glamorous.section({
  padding: '30px',
  margin: 0,
}, ({background}) => ({
  background: background ? `url(${background})` : 'white',
}));


const HeroSection = (props) => {
  console.log(props);

  return(
    <HeroContainer background={props.background} >
      {props.children}
    </HeroContainer>
  );
};

export default HeroSection;
