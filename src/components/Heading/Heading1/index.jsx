import React, { Component } from 'react';
import glamorous from 'glamorous';

const Heading1 = glamorous.h1({
  margin: 0,
  padding: 0,
  color: '#141414',
  fontFamily: 'Lato, Sans-serif',
  fontSize: '36px',
  fontWeight: 'bold',
  textAlign: 'left'
},
  ({color})       => ({ color: color }),
  ({fontFamily})  => ({ fontFamily: fontFamily }),
  ({textAlign})   => ({ textAlign: textAlign }),
  ({margin})      => ({ margin: margin }),
);


const H1 = (props) =>
  <Heading1
    color       = {props.color}
    fontFamily  = {props.fontFamily}
    textAlign   = {props.textAlign}
    margin      = {props.margin}
  > {props.text} </Heading1>;

export default H1;
