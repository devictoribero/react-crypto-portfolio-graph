import React, { Component } from 'react';
import glamorous from 'glamorous';

const Heading1 = glamorous.h1({});

const H1 = (props) =>
  <Heading1
    fontFamily = {props.fontFamily}
    color = {props.color}
    fontSize = {props.fontSize}
    fontWeight = {props.fontWeight} > {props.text} </Heading1>;

export default H1;
