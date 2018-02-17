import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PortfolioGraph from '../PortfolioGraph';
import Loading from '../../components/Loading';


class PortfolioGraphWrapper extends Component {
  static propTypes = {
    portfolio: PropTypes.array,
    PortfolioDataGiver: PropTypes.object,
  };

  componentWillMount() {
    this.getPortfolioDataAndRender(this.props.portfolio);
  }

  getPortfolioDataAndRender = portfolio => {
    const portfolioData = this.props.PortfolioDataGiver.getPorfolioInfo(this.props.portfolio);
    // const chartOptions = options;

    const chartData_1 = [
      { key: 'A', value: 100, color: '#aaac84' },
      { key: 'B', value: 200, color: '#dce7c5' },
      { key: 'C', value: 50, color: '#e3a51a' }
    ];

    const chartOptions_1 = [];

    this.setState({
      isLoading: false,
      chartData: chartData_1,
      chartOptions: chartOptions_1,
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      portfolio: this.props.portfolio,
    };
  }


  render() {
    return(
      <React.Fragment>

        { this.state.isLoading && <Loading /> }

        { !this.state.isLoading &&
          <PortfolioGraph
            data={this.state.chartData}
            options={this.state.chartOptions}/> }

      </React.Fragment>
    );
  };
};

export default PortfolioGraphWrapper;
