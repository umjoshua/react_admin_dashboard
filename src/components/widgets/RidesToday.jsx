import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chart from './Charts';

function RisesToday() {
  return (
    <div class="float-left sm:w-98% md:w-23% h-72 bg-white p-2 m-4 rounded-md justify-between flex flex-col">
      <div class="flex flex-row justify-between p-2">
        <span class="font-bold text-gray-500">Rides Today</span>
        <div><MoreVertIcon /></div>
      </div>
      <div class="flex flex-row w-full h-1/3 justify-around">
        <span class="text-4xl flex w-1/2 m-auto">126</span>
        <div class="flex-auto h-1/2 w-2/3 m-auto mr-2"><Chart color={'orange'} /></div>
      </div>
      <div class="flex flex-col overflow-auto">
        <div class=" flex flex-row justify-between ml-2 mr-2 text-gray-500">
          <span>Total</span>
          <span>Completed</span>
          <span>Rate</span>
        </div>
        <div class=" flex flex-row justify-between ml-2 mr-2">
          <span>126</span>
          <span>32</span>
          <span>3.25%</span>
        </div>
      </div>
    </div>
  )
}

export default RisesToday