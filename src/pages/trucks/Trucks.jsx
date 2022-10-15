import React, { useMemo } from 'react'
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header'
import './trucks.css';
import {GoogleMap,useLoadScript,Marker} from '@react-google-maps/api';

function Trucks() {
    const{isLoaded} = useLoadScript({googleMapsApiKey:process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})
    return (
        <div className='home'>
            <div className="header"><Header /></div>
            <div className="container">
                <div className="sidebar"><Sidebar /></div>
                {isLoaded && <Map></Map>}
            </div>
        </div>
    )
}
function Map(){
    const center=useMemo(()=>({lat:11,lng:77}),[]);
    return(
        <GoogleMap zoom={9} center={center} mapContainerClassName='map_container'>
            <Marker position={{lat:13.0827,lng:80.2707}}></Marker>
            <Marker position={{lat:9.9312,lng:76.2673}}></Marker>
            <Marker position={{lat:13,lng:77}}></Marker>
        </GoogleMap>
    )
}

export default Trucks
