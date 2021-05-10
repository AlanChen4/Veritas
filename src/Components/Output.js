import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Output = (props) => {
    const location = useLocation();
    return (
        <div>
            <h2></h2>
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
                                <Button variant='primary'>Open Map</Button>            
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
                                <Button variant='primary'>Open Chart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Output;
