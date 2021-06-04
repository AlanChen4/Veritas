import React, { useState }from 'react';
import { UserContext } from '../../contexts/userContext.js';

import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute.js';

import Navigation from '../../components/Navbar/Navbar.js';
import AboutPage from '../../pages/AboutPage.js';
import ContactPage from '../../pages/ContactPage.js';
import LoginPage from '../../pages/LoginPage.js';
import InputsPage from '../../pages/InputsPage.js';
import OutputPage from '../../pages/OutputPage.js';
import ProfilePage from '../../pages/ProfilePage.js';
import SignupPage from '../../pages/SignupPage.js';

import { ACCESS_TOKEN } from '../../api/auth.js';

function App() {
    const [user, setUser] = useState(localStorage.getItem(ACCESS_TOKEN));

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/about' component={AboutPage} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/login' component={LoginPage} />
                    <PrivateRoute path='/model' component={InputsPage} />
                    <Route path='/output' component={OutputPage} />
                    <Route path='/signup' component={SignupPage} />
                    <Route path='/profile' component={ProfilePage} />
                    <Route path='/' component={InputsPage} />
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
