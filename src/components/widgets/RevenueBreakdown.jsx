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
    data: [400, 300, 300, 200]
  }

  return (
    <div class="relative w-full lg:w-6/12 xl:w-3/12 bg-white p-4 m-4 rounded-md flex flex-col justify-between ">
      <div class="flex flex-row justify-between p-2">
        <span class="font-bold text-gray-500" >Revenue Breakdown</span>
        <div><MoreVertIcon /></div>
      </div>
      <div>
        <Chart
          type='donut'
          options={options}
          series={series.data}
        />
      </div>
    </div>
  )
}

export default RevenueBreakdown