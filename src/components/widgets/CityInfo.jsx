import React from 'react';
import { useState } from 'react';
import './city_info.css';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const Dropdown = ({ value, options, onChange }) => {
    return (
        <select className='select_val' value={value} onChange={onChange}>
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

const Chart = ({fill}) => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <ResponsiveContainer width="50%" height="50%">
            <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill={fill} />
            </BarChart>
        </ResponsiveContainer>
    )
}

function CityInfo({city,count,completed,onTime,supplies,color,depr}) {
    const options = [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
    ];
    const [value, setValue] = useState('daily');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div class="float-left sm:w-98% md:w-32% h-72 bg-white p-2 m-2 rounded-md justify-between flex flex-col">
            <div className='top'>
                <span>{city}</span>
                <Dropdown
                    options={options}
                    value={value}
                    onChange={handleChange}
                />
            </div>
            <div className='middle'>
                <div className='count'>{count}
                    <span className='depr'> {depr}%</span>
                </div>
                <Chart fill={color}/>
            </div>
            <div className="bottom">
                <div className="bottom_item">
                    <span className='bottom_item_a'>{completed} <ArrowOutwardIcon style={{color:'green',fontSize:'15px'}}/></span>
                    <span>Completed</span>
                </div>
                <div className="bottom_item">
                    <span className='bottom_item_a'>{onTime}% <ArrowOutwardIcon style={{color:'green',fontSize:'15px'}}/></span>
                    <span>On Time</span>
                </div>
                <div className="bottom_item">
                    <span className='bottom_item_a'>{supplies} <SouthEastIcon style={{color:'red',fontSize:'15px'}}/></span>
                    <span>Supplies</span>
                </div>
            </div>
        </div>
    )
}

export default CityInfo