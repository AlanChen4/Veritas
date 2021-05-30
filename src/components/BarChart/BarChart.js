import React from 'react';
import { 
    ResponsiveContainer,
    Brush,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ReferenceLine,
    Tooltip,
    Legend
} from 'recharts';
import './BarChart.css';

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
        if (ret[index]['name'] === key) {
            ret[index]['plan_b'] = value;
            index++;
        }
    }

    return ret;
}


export default function ModelBarChart(props) {
    const data = formatData({
        plan_a: props.location.state.plan_a,
        plan_b: props.location.state.plan_b
    });
    return (
        <div className='container'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    data={data} 
                    layout='vertical'
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    >
                    <XAxis type='number' hide />
                    <YAxis type='category' width={220} dataKey='name' />
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