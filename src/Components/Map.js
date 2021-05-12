import React from 'react';
import { MapContainer} from 'react-leaflet';
import Choropleth from 'react-leaflet-choropleth';
import mapData from '../Data/map.json';

const style = {
    fillColor: '#F39F3B',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.5
}

const Map = () => {
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
                    scale={['#bfffba', '#11fc00']}
                    steps={10}
                    mode='e'
                    style={style}
                    onEachFeature={(feature, layer) => layer.bindPopup(feature.properties.NAME)}
                    />
                </MapContainer>
            </div>
        );
}

export default Map;
