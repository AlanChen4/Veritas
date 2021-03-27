import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Inputs.css';

function Inputs() {
    return (
        <div>
            <div className='description'>
                <h1 className='mt-3 display-5 text-center'>
                    Choice Model Inputs
                </h1>
            </div>
            <Form className='inputs'>
                <Form.Row>
                    <Form.Group sm={2} as={Col}>
                        <Form.Label>Load Saved</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group sm={1} as={Col} className='d-flex flex-column'>
                        <Button className='load-btn mt-auto' variant='outline-primary'>Load</Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Off-Peak Price (A)</Form.Label>
                        <Form.Control as='select'>
                            <option value='0.04' label='$0.04'></option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Off-Peak Price (B)</Form.Label>
                        <Form.Control as='select'>
                            <option value='0.04' label='$0.04'></option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (A)</Form.Label>
                        <Form.Control as='select'>
                            <option value='0.04' label='$0.04'></option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (B)</Form.Label>
                        <Form.Control as='select'>
                            <option value='0.04' label='$0.04'></option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (A)</Form.Label>
                        <Form.Control as='select'>
                            <option value='0.04' label='3pm to 6pm'></option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (B)</Form.Label>
                        <Form.Control as='select'>
                            <option value='' label='3pm to 6pm'></option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (A)</Form.Label>
                        <Form.Control as='select'>
                            <option value='' label='Summer'></option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (B)</Form.Label>
                        <Form.Control as='select'>
                            <option value='0.04' label='Summer and Winter'></option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Button variant='outline-secondary'>Save Inputs</Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button>Calculate Model</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
}

export default Inputs;
