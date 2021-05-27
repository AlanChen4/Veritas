import React, { useState }from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Inputs from './Components/Inputs';
import Login from './Components/Login';
import Navigation from './Components/Navbar';
import Output from './Components/Output';
import Profile from './Components/Profile';
import Signup from './Components/Signup';

function App() {
    const [loggedIn, setIsLoggedIn] = useState(localStorage.getItem('access_token'));

    return (
        <Router>
            <div>
                <Navigation loggedIn={loggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <Switch>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/login'>
                        <Login setIsLoggedIn={setIsLoggedIn}/>
                    </Route>
                    <Route path='/model' component={Inputs}/>
                    <Route path='/output' component={Output}/>
                    <Route path='/signup'>
                        <Signup setIsLoggedIn={setIsLoggedIn} />
                    </Route>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/' component={Inputs}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
