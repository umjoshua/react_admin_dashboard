import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import ProgressBar from './ProgressBar'
import './ridestoday.css';

function TopSupplies() {
    return (
        <div className='widget'>
          <div className="top">
            <span className='title'>Top Supplies</span>
            <div className='r_side'><MoreVertIcon /></div>
          </div>
          <div class="mb-4">
            <span class="mr-4"><FiberManualRecordRoundedIcon color='secondary'/>Mumbai</span>
            <span class="ml-4"><FiberManualRecordRoundedIcon color='primary'/>Chennai</span>
          </div>
          Chennai
          <ProgressBar color = 'primary' progress = '80'/>
          Mumbai
          <ProgressBar color = 'secondary' progress = '70'/>
        </div>
      )
}

export default TopSupplies