import React from 'react';
import { ResponsiveContainer, Brush, BarChart, Bar, XAxis, YAxis, ReferenceLine, Tooltip, Legend } from 'recharts';
import { useLocation } from 'react-router-dom';
import './Output.css';


/**
 * Return data in bar chart friendly format
 * @param {Object} data contains dictionary of dictionaries representing plan A and plan B
 */

function formatData(data) {
    const ret = [];

    // add plan A
    for (const [key, value] of Object.entries(data.plan_a)) {
        ret.push({
            name: key,
            plan_a: value
        });
    }
    
    // add plan B
    let index = 0;
    for (const [key, value] of Object.entries(data.plan_b)) {
        ret[index]['plan_b'] = value;
        index++;
    }

    return ret;
}


function ChoiceModel(props) {
    const location = useLocation();
    const data = formatData({
        plan_a: location.state.plan_a,
        plan_b: location.state.plan_b
    });
    return (
        <div className='container'>
            <ResponsiveContainer width='100%' height='100%'>
                <BarChart 
                    data={data} 
                    layout='horizontal'
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                    <XAxis type='number' hide />
                    <YAxis type='category' width={200} dataKey='name' />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke='#000' />
                    <Brush dataKey='name' height={30} stroke='#8884d8' />
                    <Bar dataKey='plan_a' fill='#8884d8' />
                    <Bar dataKey='plan_b' fill='#82ca9d' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ChoiceModel;
