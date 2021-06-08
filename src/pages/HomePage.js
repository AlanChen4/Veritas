import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './HomePage.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function HomePage() {
    const history = useHistory();

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const handleRouteChange = (route) => {
        history.push(route);
    }

    return (
        <div>
            <Jumbotron style={{ background: 'url(/home.png)'}}>
                <h1 className='font-title' style={{color: 'white'}}>Welcome.</h1>
                <p className='font-text my-4' style={{color: 'white'}}>
                    Designed for electric service plan modeling, our discrete choice model
                    is capable of modeling your data onto both map and graph visualizations 
                    through specified inputs.
                </p>
                <Button className='load-btn mx-2' variant='info' style={{color:'white'}} 
                    onClick={() => handleRouteChange('model')} 
                >
                    Model
                </Button>
                <Button className='load-btn mx-2' variant='info' style={{color:'white'}} 
                    onClick={() => handleRouteChange('signup')}
                >
                    Sign Up
                </Button>
            </Jumbotron>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        src='tn_map.png'
                        alt='map visualization'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src='inputs.png'
                        alt='inputs'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src='model_bar_chart.png'
                        alt='bar chart'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}