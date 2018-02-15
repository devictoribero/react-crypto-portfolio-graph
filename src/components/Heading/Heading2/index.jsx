import React from 'react';
import glamorous from 'glamorous';

const Heading2 = glamorous.h2({
  margin: 0,
  padding: 0,
  color: '#141414',
  fontFamily: 'Lato, Sans-serif',
  fontSize: '32px',
  fontWeight: 'bold',
  textAlign: 'left'
},
  ({color})       => ({ color: color }),
  ({fontFamily})  => ({ fontFamily: fontFamily }),
  ({textAlign})   => ({ textAlign: textAlign }),
  ({margin})      => ({ margin: margin }),
);


const H2 = (props) =>
  <Heading2
    color       = {props.color}
    fontFamily  = {props.fontFamily}
    textAlign   = {props.textAlign}
    margin      = {props.margin}
  > {props.text} </Heading2>;

export default H2;
