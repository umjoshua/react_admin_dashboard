import React from 'react';
import './ridetoday.css';
import Progressbar from '../../components/Progressbar/Progessbar';
function TopSupplies() {
    return (
        <div className='widget'>
          <div className="top">
            <span className='title'>Top Supplies</span>
          </div>
          Chennai
          <Progressbar progress='70' color="primary"/>
          Mumbai
          <Progressbar progress='80'color="secondary"/>
        </div>
      )
}

export default TopSupplies