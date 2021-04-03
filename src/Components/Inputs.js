import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { OPTIONS } from './InputOptions';
import './Inputs.css';

function Inputs() {
    const [offPeakA, setOffPeakA] = useState();
    const [offPeakB, setOffPeakB] = useState();
    const [peakPriceA, setPeakPriceA] = useState();
    const [peakPriceB, setPeakPriceB] = useState();
    const [peakPeriodA, setPeakPeriodA] = useState();
    const [peakPeriodB, setPeakPeriodB] = useState();
    const [peakSeasonA, setPeakSeasonA] = useState();
    const [peakSeasonB, setPeakSeasonB] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form_data = {
            offPeakA: offPeakA,
            offPeakB: offPeakB,
            peakPriceA: peakPriceA,
            peakPriceB: peakPriceB,
            peakPeriodA: peakPeriodA,
            peakPeriodB: peakPeriodB,
            peakSeasonA: peakSeasonA,
            peakSeasonB: peakSeasonB
        };
        
        axios.post(`http://127.0.0.1:8000/api/choice-model/`, { form_data })
            .then(response => {
                // TODO: display response
                console.log(response);
                console.log(response.data);
            })
    }

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
                        <Form.Control as='select' onChange={e => setOffPeakA(e.target.value)}>
                            <option>Select</option>
                            {OPTIONS.OFF_PEAK}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Off-Peak Price (B)</Form.Label>
                        <Form.Control as='select' onChange={e => setOffPeakB(e.target.value)}>
                            <option>Select</option>
                            {OPTIONS.OFF_PEAK}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (A)</Form.Label>
                        <Form.Control as='select' onChange={e => setPeakPriceA(e.target.value)}>
                            <option>Select</option>
                            {OPTIONS.PEAK_PRICE}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (B)</Form.Label>
                        <Form.Control as='select' onChange={e => setPeakPriceB(e.target.value)}>
                            <option>Select</option>
                            {OPTIONS.PEAK_PRICE}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (A)</Form.Label>
                        <Form.Control as='select' onChange={e => setPeakPeriodA(e.target.value)}>
                            <option>Select</option>
                            {OPTIONS.PEAK_PERIOD}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (B)</Form.Label>
                        <Form.Control as='select' onChange={e => setPeakPeriodB(e.target.value)}>
                            <option>Select</option>
                            {OPTIONS.PEAK_PERIOD}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (A)</Form.Label>
                        <Form.Control as='select' onChange={e => setPeakSeasonA(e.target.value)}>
                            <option>Select</option>
                            {OPTIONS.PEAK_SEASON}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (B)</Form.Label>
                        <Form.Control as='select' onChange={e => setPeakSeasonB(e.target.value)}>
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
