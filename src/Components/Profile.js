import React, { useEffect, useState } from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import axios_instance from '../axiosApi';

const getProfileData = async () => {
    const profileData = await axios_instance.get('/account/profile/');
    return profileData;
}

const Profile = () => {
    const [profileData, setProfileData] = useState({
        'history_id': '',
        'email': '',
        'username': '',
        'first_name': '',
        'last_name': '',

    });
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    useEffect( () => {
        getProfileData()
        .then(response =>
            setProfileData(response.data)
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = {
            'email': email,
            'username': username,
            'first_name': firstName,
            'last_name': lastName

        }
        console.log(updatedData);
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row className='m-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    value={profileData.email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Row>
            <Form.Row className='m-3'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    value={profileData.username}
                    onChange={e => setUsername(e.target.value)}
                />
            </Form.Row>
            <Form.Row className='m-2'>
                <Col xs={12} sm={6}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        value={profileData.first_name} 
                        onChange={e => setFirstName(e.target.value)}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        value={profileData.last_name}
                        onChange={e => setLastName(e.target.value)}
                    />
                </Col>
            </Form.Row>
            <Button className='m-3' type='submit'>
                Update Profile
            </Button>
        </Form>
    );
}

export default Profile;
