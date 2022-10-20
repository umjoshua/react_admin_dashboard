import { MoreVertOutlined } from '@mui/icons-material'
import React from 'react'
import Chart from './Charts';


function Overview() {
    return (
        <div class="relative w-25% sm:w-100% bg-white p-4 m-4 rounded-md flex flex-col justify-between" >
            <div class="flex flex-row justify-between p-2">
                <span class="font-bold text-gray-500" >Supply Overview</span>
                <div ><MoreVertOutlined /></div>
            </div>
            <div class="flex flex-row w-full h-1/3 justify-around">
                <span class="text-sm flex w-1/2 m-auto">Banglore Supplies</span>
                <div class="flex-auto h-1/2 w-1/3 m-auto mr-2"><Chart color={'orange'} /></div>
            </div>
            <div class="flex flex-row w-full h-1/3 justify-around">
                <span class="text-sm flex w-1/2 m-auto">Chennai Supplies</span>
                <div class="flex-auto h-1/2 w-1/3 m-auto mr-2"><Chart color={'orange'} /></div>
            </div>
            <div class="flex flex-row w-full h-1/3 justify-around">
                <span class="text-sm flex w-1/2 m-auto">Mumbai Supplies</span>
                <div class="flex-auto h-1/2 w-1/3 m-auto mr-2"><Chart color={'orange'} /></div>
            </div>
        </div>
    )
}

export default Overview
