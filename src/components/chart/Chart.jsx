import React from 'react';
import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className="chart">
          <div className="chartTitle">{ title }</div>
            <ResponsiveContainer width="100%" aspect={ 4 / 1 }>
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey={ dataKey } stroke="#5550bd" />
                <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
