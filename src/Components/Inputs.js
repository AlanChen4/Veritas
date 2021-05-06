import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios_instance from '../axiosApi';
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
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios_instance.post(`http://127.0.0.1:8000/api/choice-model/`,
                // TODO: change so that history_id is gathered from current account
                {
                    history_id: '7c722fb950264e768ed108f1ba6fbfc3',
                    off_peak_a: offPeakA,
                    off_peak_b: offPeakB,
                    peak_a: peakPriceA,
                    peak_b: peakPriceB,
                    peak_period_a: peakPeriodA,
                    peak_period_b: peakPeriodB,
                    peak_season_a: peakSeasonA,
                    peak_season_b: peakSeasonB
                }
            )
            history.push({
                pathname: '/output',
                state: {
                    off_peak_a: response.data.off_peak_a,
                    off_peak_b: response.data.off_peak_b,
                    peak_a: response.data.peak_a,
                    peak_b: response.data.peak_b,
                    peak_period_a: response.data.peak_period_a,
                    peak_period_b: response.data.peak_period_b,
                    peak_season_a: response.data.peak_season_a,
                    peak_season_b: response.data.peak_season_b,
                    plan_a: response.data.plan_a,
                    plan_b: response.data.plan_b
                }
            })
        } catch (error) {
            setErrorMessage('Please check that all inputs are filled in!');
        }
    }

    return (
        <div>
            {errorMessage && <div className='alert alert-danger'> {errorMessage} </div>}
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
