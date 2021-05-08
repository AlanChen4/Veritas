import React from 'react';
import { useLocation } from 'react-router-dom';
import ModelBarChart from './ModelBarChart';
import GeoMap from './GeoMap';

const Output = (props) => {
    const location = useLocation();
    return (
        <div>
            <GeoMap />
            <ModelBarChart location={location} />
        </div>
    );
};

export default Output;
