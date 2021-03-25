import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChoiceModel from './Components/ChoiceModel';
import History from './Components/History';
import Navigation from './Components/Navbar';

function App() {
  return (
      <Router>
          <div>
              <Navigation/>
              <Switch>
                  <Route path='/model'>
                      <ChoiceModel/>
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
                      <ChoiceModel/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
