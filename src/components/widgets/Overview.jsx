import { MoreVertOutlined } from '@mui/icons-material'
import React from 'react'
import './ridestoday.css'
import Chart from './Charts';


function Overview() {
    return (
        <div className='widget'>
            <div className="top">
                <span className='title'>Supply Overview</span>
                <div className='r_side'><MoreVertOutlined /></div>
            </div>
            <div class="flex flex-col ">
                <div class="flex flex-row h-1/6 justify-between">
                    <div class="mt-auto mb-auto text-sm">Banglore Supplies</div>
                    <div className="supply_chart"><Chart color='green' /></div>
                </div>
                <div class="flex flex-row h-1/6 justify-between">
                <div class="text-sm mt-auto mb-auto">Chennai Supplies</div>
                    <div className="supply_chart justify-between"><Chart color='red' /></div>
                </div>
                <div class="flex flex-row h-1/6 justify-between">
                <div class="text-sm mt-auto mb-auto">Mumbai Supplies</div>
                    <div className="supply_chart"><Chart color='yellow' /></div>
                </div>
            </div>
        </div>
    )
}

export default Overview
