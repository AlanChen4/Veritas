import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios_instance from '../axiosApi';
import './Auth.css';


function Signup() {
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
            const response = await axios_instance.post('account/create/', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                username: username,
                password: password
            });
            return response
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
                <Button block size='lg' type='submit' disabled={!validateForm()}>
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}

export default Signup;
