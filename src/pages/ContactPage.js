import React from 'react';

import './ContactPage.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function ContactPage() {
    const submitContactForm = (event) => {
        event.preventDefault()
    }

    return (
        <div className='contact-form'>
            <h2 className='font-title mb-3'>Contact Us</h2>
            <Form onSubmit={submitContactForm}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder='First Name' />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder='Last Name' />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Email Address' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message Subject</Form.Label>
                    <Form.Control placeholder='Subject' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Enter Message' />
                </Form.Group>
                <Button className='load-btn' variant='outline-primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    );
}
