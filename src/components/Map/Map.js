import React from 'react';

import { MapContainer} from 'react-leaflet';
import Choropleth from 'react-leaflet-choropleth';
import mapData from '../../data/map.json';

const style = {
    fillColor: '#F39F3B',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.5
}

export default function Map() {
    return (
        <div>
            <MapContainer
                style={{ height: "80vh" }}
                zoom={8}
                center={[36, -86]}
                scrollWheelZoom={false}
                touchZoom={false}
            >
                <Choropleth 
                    data={mapData}
                    valueProperty={(feature) => feature.properties.households}
                    scale={['#fff2f2', '#ff0000']}
                    steps={5}
                    mode='e'
                    style={style}
                    onEachFeature={(feature, layer) => layer.bindPopup(
                        `${feature.properties.MAPNAME}: ${feature.properties.households}`
                    )}
                    />
                </MapContainer>
            </div>
        );
}