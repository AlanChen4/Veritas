import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Output.css';
import { 
    Button, 
    Card, 
    Container, 
    Row, 
    Col,
    Modal } from 'react-bootstrap';

import Map from '../Map/Map.js';
import BarChart from '../BarChart/BarChart.js';

export default function Output() {
    const location = useLocation();

    const [showMap, setShowMap] = useState(false);
    const handleMap = () => setShowMap(true);
    const handleCloseMap = () => setShowMap(false);

    const [showBarChart, setShowBarChart] = useState(false);
    const handleBarChart = () => setShowBarChart(true);
    const handleCloseBarChart = () => setShowBarChart(false);

    return (
        <div>
            <Container fluid>
                <Row className='font-title mx-1 mt-3 justify-content-center'>
                    <h1>Output</h1>
                </Row>
                <Row className='font-text my-3 justify-content-center'>
                    <p>Below are the inputs that were used to calculate the map visualization and the bar chart</p>
                </Row>
                <Row className='font-text mx-1 p-3 border border-primary justify-content-center'>
                    <Col xs={12} sm={4}>
                        <p>Off-Peak Price (Plan A): {location.state.off_peak_a}</p>
                        <p>Peak Price (Plan A): {location.state.peak_a}</p>
                        <p>Peak Period (Plan A): {location.state.peak_period_a}</p>
                        <p>Peak Season (Plan A): {location.state.peak_season_a}</p>
                    </Col>
                    <Col xs={12} sm={4}>
                        <p>Off-Peak Price (Plan B): {location.state.off_peak_b}</p>
                        <p>Peak Price (Plan B): {location.state.peak_b}</p>
                        <p>Peak Period (Plan B): {location.state.peak_period_b}</p>
                        <p>Peak Season (Plan B): {location.state.peak_season_b}</p>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Img variant='top' src='tn_map.png' />
                            <Card.Body>
                                <Card.Title>Map Visualization</Card.Title>
                                <Card.Text>
                                    Choropleth map with each county shaded to represent total estimated households that will switch over.
                                </Card.Text>
                                <Button 
                                    variant='outline-info'
                                    className='load-btn'
                                    onClick={handleMap}
                                >
                                    Open Map
                                </Button>            
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Img variant='top' src='model_bar_chart.png' />
                            <Card.Body>
                                <Card.Title>Bar Chart</Card.Title>
                                <Card.Text>
                                    Bar chart with zoom and toolbar to provide more in-depth comparison between the two offered plans.
                                </Card.Text>
                                <Button 
                                    variant='outline-info'
                                    className='load-btn'
                                    onClick={handleBarChart}
                                >
                                    Open Chart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal 
                dialogClassName='component-modal'
                show={showMap}
                onHide={handleCloseMap}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Map Visualization</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Map />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-secondary' className='load-btn' onClick={handleCloseMap}>Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal 
                dialogClassName='component-modal'
                show={showBarChart}
                onHide={handleCloseBarChart}
                backdrop='static'
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Bar Chart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BarChart location={location} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-secondary' className='load-btn' onClick={handleCloseBarChart}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};