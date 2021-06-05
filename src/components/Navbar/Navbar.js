import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './Navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { UserContext } from '../../contexts/userContext.js';
import { logoutUser } from '../../api/auth.js';

export default function Navigation() {
    const history = useHistory();

    // eslint-disable-next-line no-unused-vars
    const {user, setUser} = useContext(UserContext)
    const logout = (event) => {
        event.preventDefault();
        logoutUser();
        setUser(null);
        history.push('/login');
    }

    return (
        <Navbar className='nav-bar' expand="sm" >
            <Navbar.Brand href="/">
                <img 
                    src='/logo.png'
                    height='50'
                    alt='Veritas Economics logo'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="container-fluid">
                    <Nav.Link className='ml-auto' />
                    <Nav.Link className='font-link' href='model'>model</Nav.Link>
                    <Nav.Link className='font-link' href='contact'>contact</Nav.Link>
                    <Nav.Link className='font-link' href='about'>about</Nav.Link>
                    { !!user ? 
                        null : <Nav.Link className='ml-4'/> 
                    }
                    { !!user ? 
                        null : <Nav.Link className='font-profile' href='login'>Login</Nav.Link>
                    }
                    { !!user ? 
                        null : <Nav.Link className='font-profile' href='signup'>Sign Up</Nav.Link>
                    }
                    { !!user ?
                        <Nav.Link className='font-profile' href='profile'>Profile</Nav.Link> : null
                    }
                    { !!user ?
                        <button className='font-profile sign-out-btn' onClick={logout}>Sign Out</button>: null
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}