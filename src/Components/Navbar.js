import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" >
            <Navbar.Brand href="model">Veritas Economics</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav"/>
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href='model'>Choice Model</Nav.Link>
                    <Nav.Link href='contact'>Contact</Nav.Link>
                    <Nav.Link href='about'>About</Nav.Link>
                    <Nav.Link href='help'>Help</Nav.Link>
                    <Nav.Link href='login'>Login</Nav.Link>
                    <Nav.Link href='signup'>Signup</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
