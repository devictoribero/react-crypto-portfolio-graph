import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';


const Navigator = (props) => {
  const links = props.children.map((child, index) => {
    const url_child = `/${child.props.children}`;
    return <li key = {index}>
        <Link to = {url_child}>
          {child.props.children}
        </Link>
      </li>
  });

  return(
    <nav>
      <ul>{links}</ul>
    </nav>
  );
};

export default Navigator;
