import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function History() {
    return (
        <Form className='m-3'>
            <Form.Group controlId='historyNameInput'>
                <Form.Label>Saved Inputs Name</Form.Label>
                <Form.Control as='select'>
                    <option>Example Name</option>
                </Form.Control>
            </Form.Group>
            <Button variant='primary' type='submit'>
                Load Inputs
            </Button>
        </Form>
    );
}

export default History;
