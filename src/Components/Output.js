import React, { useState } from 'react';
import { 
    Button, 
    Card, 
    Container, 
    Row, 
    Col,
    Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Map from './Map';
import ModelBarChart from './ModelBarChart';
import './Output.css';

const Output = (props) => {
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
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Img variant='top' src='tn_map.png' />
                            <Card.Body>
                                <Card.Title>Map Visualization</Card.Title>
                                <Card.Text>
                                    Choropleth map with each county shaded to represent total estimated households that will switch over.
                                </Card.Text>
                                <Button 
                                    variant='primary'
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
                                    variant='primary'
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
                    <Button variant='secondary' onClick={handleCloseMap}>Close</Button>
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
                    <ModelBarChart location={location} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseBarChart}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Output;
