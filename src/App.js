import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navigator from './components/Navigator';

import Home from './scenes/Home';
import Portfolio from './scenes/Portfolio';


class App extends Component {
  render() {
    return (
      <main>

        <Router>
          <div>
            <Route exact path="/" component={Home} />

            <Navigator>
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
            </Navigator>

            <Route path="/portfolio" component={Portfolio} />
          </div>
        </Router>

      </main>
    );
  }
}

export default App;
