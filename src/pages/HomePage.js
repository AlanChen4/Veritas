import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function HomePage() {
    const history = useHistory();

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
                <Button className='load-btn mx-2' variant='outline-info' style={{color:'white'}} 
                    onClick={() => handleRouteChange('model')} 
                >
                    Model
                </Button>
                <Button className='load-btn mx-2' variant='outline-info' style={{color:'white'}} 
                    onClick={() => handleRouteChange('signup')}
                >
                    Sign Up
                </Button>
            </Jumbotron>
        </div>
    )
}