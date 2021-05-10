import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import mapData from '../Data/map.json';

const Map = () => {
    return (
        <div>
            <MapContainer
                style={{ height: "80vh" }}
                zoom={8}
                center={[36, -86]}
            >
                <GeoJSON 
                    data={mapData.features}    
                />
            </MapContainer>
        </div>
    );
}

export default Map;
