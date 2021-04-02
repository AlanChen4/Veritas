import axios from 'axios';
import React, { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './Inputs.css';

function Inputs() {

    const handleSubmit = (event) => {
    //     let [output, setOutput] = useState('');

    //     const fetchOutput = useCallback( () => {
    //         axios.post(`http://127.0.0.1:8000/api/choice-model/`)
    //     }, []);
    }

    const off_peak_choices = [0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09];
    const off_peak_inputs = off_peak_choices.map(choice =>
        <option value={choice} label={`$${choice}`}></option>
    );

    const peak_price_choices = [
        0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18,
        0.19, 0.20, 0.21, 0.22, 0.23, 0.24, 0.25,
        0.26, 0.27, 0.28, 0.29, 0.30, 0.31, 0.32,
        0.33, 0.34, 0.35, 0.37, 0.38, 0.39, 0.40,
        0.41, 0.42, 0.43, 0.44, 0.45
    ];
    const peak_price_inputs = peak_price_choices.map(choice =>
        <option value={choice} label={`$${choice}`}></option>
    );

    const peak_period_choices = [
        '(2 hours) 5PM to 7PM',
        '(3 hours) 2PM to 5PM',
        '(3 hours) 3PM to 6PM',
        '(3 hours) 4PM to 7PM',
        '(4 hours) 2PM to 6PM',
        '(6 hours) 2PM to 8PM'
    ];
    const peak_period_inputs = peak_period_choices.map(choice =>
        <option value={choice} label={choice}></option>
    );

    const peak_season_choices = ['Summer', 'Summer and Winter']
    const peak_season_inputs = peak_season_choices.map(choice =>
        <option value={choice} label={choice}></option>
    );

    return (
        <div>
            <Form className='inputs' onSubmit={handleSubmit}>
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
                            {off_peak_inputs}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Off-Peak Price (B)</Form.Label>
                        <Form.Control as='select'>
                            {off_peak_inputs}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (A)</Form.Label>
                        <Form.Control as='select'>
                            {peak_price_inputs}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (B)</Form.Label>
                        <Form.Control as='select'>
                            {peak_price_inputs}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (A)</Form.Label>
                        <Form.Control as='select'>
                            {peak_period_inputs}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (B)</Form.Label>
                        <Form.Control as='select'>
                            {peak_period_inputs}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (A)</Form.Label>
                        <Form.Control as='select'>
                            {peak_season_inputs}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (B)</Form.Label>
                        <Form.Control as='select'>
                            {peak_season_inputs}
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
