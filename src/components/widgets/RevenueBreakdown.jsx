import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chart from 'react-apexcharts'

function RevenueBreakdown() {
  const options = {
    labels: [
      'Chennai',
      'Bangalore',
      'Mumbai',
      'Trivandrum'
    ]
  }
  const series = {
    data: [400,300,300,200]
  }
  
  return (
    <div className='widget'>
        <div className="top">
          <span className="title">Revenue Breakdown</span>
          <div className='r_side'><MoreVertIcon /></div>
        </div>
        <div className="donut">
          <Chart 
            className='donut_inside'
            type='donut'
            options={options}
            series={series.data}
          />
        </div>
        
    </div>
  )
}

export default RevenueBreakdown