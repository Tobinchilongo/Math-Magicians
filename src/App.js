import React from 'react';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Components

import Nav from './Components/Navigation';

// Pages

import Home from './Pages/Home';
import CalculatorPage from './Pages/CalculatorPage';
import Quote from './Pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Calculator">
              <CalculatorPage />
            </Route>
            <Route path="/Quote">
              <Quote />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
