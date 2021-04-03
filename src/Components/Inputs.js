import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { OPTIONS } from './InputOptions';
import './Inputs.css';

function Inputs() {
    return (
        <div>
            <Form className='inputs'>
                <Form.Row>
                    <Form.Group sm={2} as={Col}>
                        <Form.Label>Load Saved</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group sm={1} as={Col} className='d-flex flex-column'>
                        <Button className='load-btn mt-auto' variant='outline-primary'>Load</Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Off-Peak Price (A)</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                            {OPTIONS.OFF_PEAK}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Off-Peak Price (B)</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                            {OPTIONS.OFF_PEAK}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (A)</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                            {OPTIONS.PEAK_PRICE}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (B)</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                            {OPTIONS.PEAK_PRICE}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (A)</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                            {OPTIONS.PEAK_PERIOD}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (B)</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                            {OPTIONS.PEAK_PERIOD}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (A)</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                            {OPTIONS.PEAK_SEASON}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (B)</Form.Label>
                        <Form.Control as='select'>
                            <option>Select</option>
                            {OPTIONS.PEAK_SEASON}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Button variant='outline-secondary'>Save Inputs</Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button type='submit'>Calculate Model</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
}

export default Inputs;
