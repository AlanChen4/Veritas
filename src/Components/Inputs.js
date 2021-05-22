import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios_instance from '../axiosApi';
import {
    Button,
    Col,
    Form,
    Modal
} from 'react-bootstrap';
import { OPTIONS } from './InputOptions';
import './Inputs.css';

export default function Inputs() {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState();

    const [historyId, setHistoryId] = useState();
    const [offPeakA, setOffPeakA] = useState();
    const [offPeakB, setOffPeakB] = useState();
    const [peakPriceA, setPeakPriceA] = useState();
    const [peakPriceB, setPeakPriceB] = useState();
    const [peakPeriodA, setPeakPeriodA] = useState();
    const [peakPeriodB, setPeakPeriodB] = useState();
    const [peakSeasonA, setPeakSeasonA] = useState();
    const [peakSeasonB, setPeakSeasonB] = useState();

    const [models, setModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState();

    const [inputsNickname, setInputsNickname] = useState('');
    const [showSaveInputs, setShowSaveInputs] = useState(false);
    const handleCloseSaveInputs = () => {
        setShowSaveInputs(false);
    }
    const handleSubmitNickname = async (e) => {
        e.preventDefault();
        if (inputsNickname === '') {
            alert('Nickname can not be empty!');
        } else {
            setShowSaveInputs(false);
            try {
                await axios_instance.post('/api/choice-model/', 
                    {
                        history_id: historyId,
                        nickname: inputsNickname,
                        off_peak_a: offPeakA, off_peak_b: offPeakB,
                        peak_a: peakPriceA, peak_b: peakPriceB,
                        peak_period_a: peakPeriodA, peak_period_b: peakPeriodB,
                        peak_season_a: peakSeasonA, peak_season_b: peakSeasonB
                    }
                );
                setErrorMessage(false);
            } catch (error) {
                setErrorMessage('Inputs could not be saved. Please check that all inputs are filled in!');
            }
        }
    }

    const getProfileData = async () => {
        const profileData = await axios_instance.get('/account/profile/');
        return profileData;
    }

    const getModels = async (history_id) => {
        const models = await axios_instance.get(`/account/${history_id}/models/`);
        return models;
    }

    const getModelData = async (model_id) => {
        const inputData = await axios_instance.get(`/api/choice-model/${model_id}/`);
        setOffPeakA(inputData.data.off_peak_a);
        setOffPeakB(inputData.data.off_peak_b);
        setPeakPriceA(inputData.data.peak_a);
        setPeakPriceB(inputData.data.peak_b);
        setPeakPeriodA(inputData.data.peak_period_a);
        setPeakPeriodB(inputData.data.peak_period_b);
        setPeakSeasonA(inputData.data.peak_season_a);
        setPeakSeasonB(inputData.data.peak_season_b);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios_instance.post(`/api/calculate/`,
                {
                    history_id: historyId,
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

    useEffect(() => {
        getProfileData()
        .then(response => {
            const tempHistoryId = response.data.history_id;
            setHistoryId(response.data.history_id);
            getModels(tempHistoryId)
            .then(response => {
                setModels(response.data);
            });
        });

    }, [showSaveInputs]);

    return (
        <div>
            <Modal
                animation={false}
                show={showSaveInputs}
                onHide={handleCloseSaveInputs}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Save Inputs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitNickname}>
                        <Form.Group>
                            <Form.Label>Nickname for these inputs</Form.Label>
                            <Form.Control onChange={e => setInputsNickname(e.target.value)} placeholder='Enter nickname' value={inputsNickname} />
                        </Form.Group>
                        <Button type='submit'>
                            Save Inputs
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            {errorMessage && <div className='alert alert-danger'> {errorMessage} </div>}
            <Form className='inputs' onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group sm={2} as={Col}>
                        <Form.Label>Load Saved</Form.Label>
                        <Form.Control as='select' onChange={e => setSelectedModel(e.target.value)}>
                            <option key='select'>Select</option>
                            {models.map(m => 
                                <option key={m.id} value={m.id}>{m.nickname}</option>)
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group sm={1} as={Col} className='d-flex flex-column'>
                        <Button onClick={() => getModelData(selectedModel)} className='load-btn mt-auto' variant='outline-primary'>Load</Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Off-Peak Price (A)</Form.Label>
                        <Form.Control as='select' value={offPeakA} onChange={e => setOffPeakA(e.target.value)}>
                            {OPTIONS.OFF_PEAK}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Off-Peak Price (B)</Form.Label>
                        <Form.Control as='select' value={offPeakB} onChange={e => setOffPeakB(e.target.value)}>
                            {OPTIONS.OFF_PEAK}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (A)</Form.Label>
                        <Form.Control as='select' value={peakPriceA} onChange={e => setPeakPriceA(e.target.value)}>
                            {OPTIONS.PEAK_PRICE}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Price (B)</Form.Label>
                        <Form.Control as='select' value={peakPriceB} onChange={e => setPeakPriceB(e.target.value)}>
                            {OPTIONS.PEAK_PRICE}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (A)</Form.Label>
                        <Form.Control as='select' value={peakPeriodA} onChange={e => setPeakPeriodA(e.target.value)}>
                            {OPTIONS.PEAK_PERIOD}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Period (B)</Form.Label>
                        <Form.Control as='select' value={peakPeriodB} onChange={e => setPeakPeriodB(e.target.value)}>
                            {OPTIONS.PEAK_PERIOD}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (A)</Form.Label>
                        <Form.Control as='select' value={peakSeasonA} onChange={e => setPeakSeasonA(e.target.value)}>
                            {OPTIONS.PEAK_SEASON}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Peak Season (B)</Form.Label>
                        <Form.Control as='select' value={peakSeasonB} onChange={e => setPeakSeasonB(e.target.value)}>
                            {OPTIONS.PEAK_SEASON}
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group sm={3} as={Col}></Form.Group>
                    <Form.Group as={Col}>
                        <Button onClick={() => setShowSaveInputs(true)}variant='outline-secondary'>Save Inputs</Button>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Button type='submit'>Calculate Model</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
}
