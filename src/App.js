import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Output from './Components/Output';
import Inputs from './Components/Inputs';
import Navigation from './Components/Navbar';

function App() {
  return (
      <Router>
          <div>
              <Navigation/>
              <Switch>
                  <Route path='/model'>
                      <Inputs/>
                  </Route>
                  <Route path='/output'>
                      <Output/>
                  </Route>
                  <Route path='/contact'>
                      <h1>contact</h1>
                  </Route>
                  <Route path='/about'>
                      <h1>about</h1>
                  </Route>
                  <Route path='/help'>
                      <h1>help</h1>
                  </Route>
                  <Route path='/'>
                      <Inputs/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
