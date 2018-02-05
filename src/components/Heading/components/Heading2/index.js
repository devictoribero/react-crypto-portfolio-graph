import React, { Component } from 'react';
import glamorous from 'glamorous';

const Heading2 = glamorous.h2({
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
  ({fontSize})    => ({ fontSize: fontSize }),
  ({fontWeight})  => ({ fontWeight: fontWeight }),
  ({textAlign})   => ({ textAlign: textAlign }),
);

// Realmente aqui queiro poder hacer un export de distintos H2,H,H3,H4...
// que estos son componentes cada uno de ellos
const H2 = (props) =>
  <Heading2
    color       = {props.color}
    fontFamily  = {props.fontFamily}
    fontSize    = {props.fontSize}
    fontWeight  = {props.fontWeight}
    textAlign   = {props.textAlign}
  >
    {props.text}
  </Heading2>;

export default H2;
