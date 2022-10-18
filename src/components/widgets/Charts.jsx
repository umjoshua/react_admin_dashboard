import React from 'react'
import { AreaChart, Area, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './chart.css'

const data = [
  {
    name: 'January',
    uv: 400,
  },
  {
    name: 'February',
    uv: 300
  },
  {
    name: 'March',
    uv: 350
  },
  {
    name: 'April',
    uv: 280
  },
  {
    name: 'March',
    uv: 350
  }
];

function Card(props) {
  return (
    <div className='chart'>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            bottom: 60
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke={props.color} fill={props.color} fillOpacity={0.3}/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Card