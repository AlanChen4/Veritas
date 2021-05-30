import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { UserContext } from '../../contexts/userContext.js';
import { loginUser } from '../../api/auth.js';

import { ACCESS_TOKEN } from '../../api/auth.js';

export default function Login(props) {
    const history = useHistory();

    // eslint-disable-next-line no-unused-vars
    const {user, setUser} = useContext(UserContext)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(email, password)
            .then((data) => {
                setUser(localStorage.getItem(ACCESS_TOKEN));
                history.push('/');
            }).catch((error) => {
                alert(error);
            })
    }

    return (
        <div className='auth-form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group size='lg' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    Login
                </Button>
            </Form>
        </div>
    );
}
