import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Help from './Components/Help';
import Inputs from './Components/Inputs';
import Login from './Components/Login';
import Navigation from './Components/Navbar';
import Output from './Components/Output';
import Signup from './Components/Signup';

function App() {
  return (
      <Router>
          <div>
              <Navigation/>
              <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact}/>
                  <Route path='/help' component={Help}/>
                  <Route path='/login' component={Login}/>
                  <Route path='/model' component={Inputs}/>
                  <Route path='/output' component={Output}/>
                  <Route path='/signup' component={Signup}/>
                  <Route path='/' component={Inputs}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
