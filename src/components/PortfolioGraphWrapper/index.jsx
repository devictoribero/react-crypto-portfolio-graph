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
    console.log("will mount");
    const data = this.props.cryptoDataProvider.__invoke();
    console.log(data);
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        loading: false,
        data: 'this is the data',
      });
    }, 2000);
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
