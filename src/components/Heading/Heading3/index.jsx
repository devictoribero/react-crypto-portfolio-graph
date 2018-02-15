import React, { Component } from 'react';
import glamorous from 'glamorous';

const Heading3 = glamorous.h3({
  margin: 0,
  padding: 0,
  color: '#141414',
  fontFamily: 'Lato, Sans-serif',
  fontSize: '22px',
  fontWeight: 'bold',
  textAlign: 'left'
},
  ({color})       => ({ color: color }),
  ({fontFamily})  => ({ fontFamily: fontFamily }),
  ({textAlign})   => ({ textAlign: textAlign }),
  ({margin})      => ({ margin: margin }),
);


const H3 = (props) =>
  <Heading3
    color       = {props.color}
    fontFamily  = {props.fontFamily}
    textAlign   = {props.textAlign}
    margin      = {props.margin}
  > {props.text} </Heading3>;

export default H3;
