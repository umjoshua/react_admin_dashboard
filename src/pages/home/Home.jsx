import React from 'react'
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header'
import RisesToday from '../../components/widgets/RidesToday';
import TopSupplies from '../../components/widgets/TopSupplies';
import Overview from '../../components/widgets/Overview';
import City_info from '../../components/widgets/City_info'
import BTable from '../../components/widgets/table';
import RevenueBreakdown from '../../components/widgets/RevenueBreakdown';
function Home() {
    return (
        <div class="w-screen h-1/1 flex flex-col bg-teal-50">
            <div><Header /></div>
            <div class="w-1/1 h-1/1 flex float-left">
                <div class="h-1/1"><Sidebar /></div>
                <div class="flex flex-col justify-center ">
                    <div class="flex flex-row flex-wrap">
                        <RisesToday />
                        <TopSupplies />
                        <Overview />
                        <RevenueBreakdown/>
                    </div>
                    <div class="flex flex-row flex-wrap">
                        <City_info city='Chennai' count='27' completed='2' onTime='4.5' supplies='20' color='blue' depr='+2.5' />
                        <City_info city='Mumbai' count='27' completed='2' onTime='4.5' supplies='20' color='#dea233' depr='+2.5' />
                        <City_info city='Banglore' count='27' completed='2' onTime='4.5' supplies='20' color='red' depr='+2.5' />
                    </div>
                    <div class="m-5">
                        <BTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
