import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios_instance from '../axiosApi';
import './Navbar.css'

function Navigation(props) {
    async function handleSignOut() {
        try {
            const response = await axios_instance.post('/account/token/blacklist/', {
                'refresh_token': localStorage.getItem('refresh_token')
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axios_instance.defaults.headers['Authorization'] = null;
            props.setIsLoggedIn(false);
            return response;
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Navbar className='nav-bar' expand="sm" >
            <Navbar.Brand href="model">
                <img 
                    src='/logo.png'
                    height='50'
                    alt='Veritas Economics logo'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="container-fluid">
                    <Nav.Link className='font-link ml-auto' href='model'>model</Nav.Link>
                    <Nav.Link className='font-link' href='contact'>contact</Nav.Link>
                    <Nav.Link className='font-link' href='about'>about</Nav.Link>
                    { props.loggedIn ? null : <Nav.Link className='ml-auto' href='login'>Login</Nav.Link> }
                    { props.loggedIn ? null : <Nav.Link href='signup'>Signup</Nav.Link> }
                    { props.loggedIn ? <Nav.Link className='font-profile ml-5' href='profile'>Profile</Nav.Link> : null }
                    { props.loggedIn ? <button className='font-profile sign-out-btn' onClick={handleSignOut}>Sign Out</button>: null }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
