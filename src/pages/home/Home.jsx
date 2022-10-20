import React from 'react'
import Sidebar from '../../components/sidebar/sidebar';
import Header from '../../components/header/header'
import RisesToday from '../../components/widgets/RidesToday';
import TopSupplies from '../../components/widgets/TopSupplies';
import Overview from '../../components/widgets/Overview';
import CityInfo from '../../components/widgets/CityInfo'
import BTable from '../../components/widgets/table';
import RevenueBreakdown from '../../components/widgets/RevenueBreakdown';
function Home() {
    return (
        <div class="w-full h-full flex flex-col bg-teal-50 justify-between">
            <div><Header /></div>
            <div class="w-full h-full flex flex-row">
                <div class="h-full w-72" ><Sidebar /></div>
                <div class="w-full flex flex-col flex-wrap">
                    <div class="flex flex-row flex-wrap ">
                        <RisesToday />
                        <TopSupplies />
                        <Overview />
                        <RevenueBreakdown />
                    </div>
                    <div class="flex flex-row flex-wrap">
                        <CityInfo city='Chennai' count='27' completed='2' onTime='4.5' supplies='20' color='blue' depr='+2.5' />
                        <CityInfo city='Mumbai' count='27' completed='2' onTime='4.5' supplies='20' color='#dea233' depr='+2.5' />
                        <CityInfo city='Banglore' count='27' completed='2' onTime='4.5' supplies='20' color='red' depr='+2.5' />
                    </div>
                    <div class="m-4">
                        <BTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
