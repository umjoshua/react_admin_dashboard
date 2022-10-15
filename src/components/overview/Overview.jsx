import { MoreVertOutlined } from '@mui/icons-material'
import React from 'react'
import './overview.css'

function Overview() {
    return (
        <div className='widget'>
            <div className="top">
                <span className='title'>Supply Overview</span>
                <div className='r_side'><MoreVertOutlined /></div>
            </div>
            <div className='cities'>
                <span>Banglore Supplies</span>
            </div>
            <div className='cities'>
                <span>Chennai Supplies</span>
            </div>
            <div className='cities'>
                <span>Mumbai Supplies</span>
            </div>

        </div>
    )
}

export default Overview
