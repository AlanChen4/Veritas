import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios_instance from '../axiosApi';
import './Auth.css';

function Login(props) {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios_instance.post('/account/token/obtain/', {
                email: email,
                password: password
            });
            axios_instance.defaults.headers['Authorization'] = "JWT " + response.data.access;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            props.setIsLoggedIn(true);
            history.push('/model');
        } catch (error) {
            console.log(error);
        }
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
                <Button block size='lg' type='submit' disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;
