import React from 'react'
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header'
import RisesToday from '../../components/widgets/RidesToday';
import TopSupplies from '../../components/widgets/TopSupplies';
import './home.css'
import Overview from '../../components/overview/Overview';
import City_info from '../../components/widgets/City_info'
import BTable from '../../components/widgets/table';
function Home() {
    return (
        <div className='home'>
            <div className="header"><Header /></div>
            <div className="container">
                <div className="sidebar"><Sidebar /></div>
                <div className="home_container">
                    <div className="first">
                        <RisesToday />
                        <TopSupplies />
                        <Overview />
                        <RisesToday />
                    </div>
                    <div className="second">
                        <City_info city='Chennai' count='199' completed='33' onTime='3.25' supplies='330' color='#4636f7' depr='-3.7'/>
                        <City_info city='Mumbai' count='27' completed='2' onTime='4.5' supplies='20' color='#dea233' depr='+2.5'/>
                        <City_info city='Banglore' count='44' completed='15' onTime='10.1' supplies='150' color='#f720a1' depr='+3.1'/>
                    </div>
                    <div className="third">
                        <BTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
