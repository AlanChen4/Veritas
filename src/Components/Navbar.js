import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios_instance from '../axiosApi';
import './Navbar.css'

function Navigation(props) {
    async function handleSignOut() {
        try {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axios_instance.defaults.headers['Authorization'] = null;
            props.setIsLoggedIn(false);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Navbar className='nav-bar' expand="sm" >
            <Navbar.Brand id='logo' href="model">Veritas Economics</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="container-fluid">
                    <Nav.Link href='model'>Choice Model</Nav.Link>
                    <Nav.Link href='contact'>Contact</Nav.Link>
                    <Nav.Link href='about'>About</Nav.Link>
                    <Nav.Link href='help'>Help</Nav.Link>
                    { props.loggedIn ? null : <Nav.Link className='ml-auto' href='login'>Login</Nav.Link> }
                    { props.loggedIn ? null : <Nav.Link href='signup'>Signup</Nav.Link> }
                    { props.loggedIn ? <Nav.Link className='ml-auto' href='account'>My Account</Nav.Link> : null }
                    { props.loggedIn ? <Button onClick={handleSignOut}>Sign Out</Button>: null }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
