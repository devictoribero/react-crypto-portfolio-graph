import React from 'react';
import {PieChart} from 'react-easy-chart';

const PortfolioGraph = (props) => {

  return (
    <PieChart labels data={props.data} />
  );
};

export default PortfolioGraph;
