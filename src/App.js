import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './scenes/Home';
import Example from './scenes/Example';

class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <div>

            <Route exact path="/" component={Home} />

            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/example1">Example1</Link></li>
              </ul>
            </nav>
            
            <Route path="/example1" component={Example} />
          </div>
        </Router>
      </main>
    );
  }
}

export default App;
