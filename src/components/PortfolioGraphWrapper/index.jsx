import React, { Component } from 'react';

import PortfolioGraph from '../PortfolioGraph';
import Loading from '../../components/Loading';


class PortfolioGraphWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      portfolio: this.props.portfolio,
    };
  }

  componentWillMount() {
    this.fetchAndRenderCryptosPortfolio(this.props.portfolio);
  }

  fetchAndRenderCryptosPortfolio = portfolio => {
    this.props.cryptoDataProvider
      .getData(this.props.portfolio)
      .then(dataFetched => console.log(dataFetched.data));
  }

  render() {
    return (
      <React.Fragment>
        { this.state.loading && <Loading /> }
        { !this.state.loading && <PortfolioGraph data ={this.state.data} /> }
      </React.Fragment>
    );
  }
};

export default PortfolioGraphWrapper;
