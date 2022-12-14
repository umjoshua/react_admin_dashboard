import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import { LinearProgress } from '@mui/material';


function TopSupplies() {
  const ProgressBar = ({ progress, color }) => {
    return (
      <LinearProgress color={color} variant="determinate" value={progress} />
    )
  }
  return (
    <div class="float-left sm:w-98% md:w-23% h-72 bg-white p-2 m-4 rounded-md justify-between flex flex-col" >
      <div class="flex flex-row justify-between p-2">
        <span class="font-bold text-gray-500">Top Supplies</span>
        <div><MoreVertIcon /></div>
      </div>
      <div class="p-4">
        <span class="mr-4"><FiberManualRecordRoundedIcon color='secondary' />Mumbai</span>
        <span class="ml-4"><FiberManualRecordRoundedIcon color='primary' />Chennai</span>
      </div>
      <div class="p-4 text-lg text-gray-700">
        Chennai
        <ProgressBar color='primary' progress='80' />
      </div>
      <div class="p-4 text-lg text-gray-700">
        Mumbai
        <ProgressBar   color='secondary' progress='70' />
      </div>
    </div>
  )
}

export default TopSupplies