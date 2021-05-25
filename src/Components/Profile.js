import React, { useEffect, useState } from 'react';
import { 
    Alert,
    Button, 
    Form, 
    Col } from 'react-bootstrap';
import axios_instance from '../axiosApi';
import './Profile.css';

const getProfileData = async () => {
    const profileData = await axios_instance.get('/account/profile/');
    return profileData;
}

const Profile = () => {
    const [historyId, setHistoryId] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [updatedInfo, setUpdatedInfo] = useState(false);

    const loadProfileData = async (data) => {
        setHistoryId(data.history_id);
        setEmail(data.email);
        setUsername(data.username);
        setFirstName(data.first_name);
        setLastName(data.last_name);
    }

    useEffect( () => {
        getProfileData()
        .then(response =>
            loadProfileData(response.data)
        );
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = {
            'email': email,
            'username': username,
            'first_name': firstName,
            'last_name': lastName

        }

        await axios_instance.put(`/account/profile/${historyId}/`, updatedData);
        setUpdatedInfo(true);
    }

    return (
        <div>
            {updatedInfo && <Alert variant='success'>Updated Profile!</Alert>}
            <div className='profile-container'>
                <Form onSubmit={handleSubmit}>
                    <Form.Row className='m-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Row>
                    <Form.Row className='m-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </Form.Row>
                    <Form.Row className='m-2'>
                        <Col xs={12} sm={6}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                                value={firstName} 
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </Col>
                    </Form.Row>
                    <Button className='m-3 load-btn' variant='outline-primary' type='submit'>
                        Update Profile
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Profile;
