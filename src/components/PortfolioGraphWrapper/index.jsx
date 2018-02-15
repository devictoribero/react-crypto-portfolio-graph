import React, { Component } from 'react';
import glamorous from 'glamorous';

import PortfolioGraph from '../PortfolioGraph';


class PortfolioGraphWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: this.props.portfolio,
    };
    console.log(this.state);
  }

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    return (
      <div></div>
    );
  }
};

export default PortfolioGraphWrapper;
