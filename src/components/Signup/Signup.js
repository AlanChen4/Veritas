import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/userContext.js';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { authRequest, loginUser } from '../../api/auth.js';

export default function Signup() {
    const history = useHistory();

    // eslint-disable-next-line no-unused-vars
    const { user, setUser, isUserLoggedIn} = useContext(UserContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && username.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await authRequest.post('account/create/', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                username: username,
                password: password
            }).then(() => {
                loginUser(email, password).then(() => {
                    setUser({email: email});
                    history.push('/');
                })
            })
        } catch (error) {
            console.log(error.stack);
        }
    }

    return (
        <div className='auth-form'>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} controlId='firstName'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            autoFocus
                            type='firstName'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId='lastName'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type='lastName'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Group size='lg' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size='lg' controlId='username'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size='lg' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button 
                    block size='md' type='submit' 
                    disabled={!validateForm()}
                    variant='outline-primary'
                    className='load-btn'
                >
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}