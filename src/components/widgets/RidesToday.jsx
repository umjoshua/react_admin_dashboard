import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './widgets.css'
import Chart from './Charts';

function RisesToday() {
  return (
    <div className='widget'>
      <div className="top">
        <span className='title'>Rides Today</span>
        <div className='r_side'><MoreVertIcon /></div>
      </div>
      <div className="rides_details">
        <span className='numbers'>126</span>
        <div className="rides_chart"><Chart color={'orange'} /></div>
      </div>
      <div className='b_side'>
        <div>
          <span className='b_title'>Total</span>
          <span className='b_title'>Completed</span>
          <span className='b_title'>Rate</span>
        </div>
        <div>
          <span className='b_item'>126</span>
          <span className='b_item'>32</span>
          <span className='b_item'>3.25%</span>
        </div>
      </div>
    </div>
  )
}

export default RisesToday