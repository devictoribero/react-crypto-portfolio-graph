import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';

const NavigatorContainer = glamorous.ul({
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
});

const LinkElement = glamorous.li({
  listStyle: 'none',
  margin: 'auto 10px',
});

const Navigator = (props) => {
  const links = props.children.map((child, index) => {
    const url_child = child.props.to;
    return <LinkElement key = {index}>
        <Link to = {url_child}>
          {child.props.children}
        </Link>
      </LinkElement>
  });

  return(
    <nav>
      <NavigatorContainer>{links}</NavigatorContainer>
    </nav>
  );
};

export default Navigator;
