import React from 'react'
import Table from '../components/Table'
import {rateHistoryData, cardData, BalanceData} from '../data/currencyData';
import TabsRender from '../components/Tabs'
import Button from '../components/Button'
import CurrencyCard from '../components/CurrencyCard'
import BalanceCard from '../components/BalanceCard';
import ChartBar from '../components/ChartBar';
import DonutChart from '../components/Dough';
function Dashboard() {
  return (
    <div className='py-[28px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[25px]'>
            
            {BalanceData.map((currency) => (
              <BalanceCard key={currency.id} data={currency} />
            ))}
            {cardData.map((currency) => (
              <CurrencyCard key={currency.id} data={currency} />
            ))}
        </div>
        <div className="xl:flex mt-[27px] gap-[25px]">
          <div className="flex-auto bg-white dark:bg-[#1C1C25] rounded-[15px] h-[448px]"> 
            <ChartBar />
          </div>
          <div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-5 pl-[39px] pr-[20px] xl:w-[478px] relative">
            <p className='absolute left-[39px] top-[37px] text-[#000] text-[20px] font-semibold leading-[28px] dark:text-white'>Markets</p>
              <TabsRender />
          </div>
        </div>

        <div className="xl:flex mt-[27px] gap-[25px]">
          <div className="flex-auto bg-white dark:bg-[#1C1C25] rounded-[15px] py-[21px] px-[29px]"> 
              <DonutChart />
          </div>
          <div className="flex-auto bg-white dark:bg-[#1C1C25] rounded-[15px]"> 

          </div>
          <div className="bg-white dark:bg-[#1C1C25] rounded-[15px] pt-5 pl-[39px] pr-[20px] pb-5">
            <div className='flex justify-between items-center'>
              <p className='text-[#000] text-[20px] font-semibold leading-7 dark:text-white'>History</p>
              <div className='mr-[24px]'>
                <Button />
              </div>
            </div>
            <div className='xl:w-[563px] h-[223px] overflow-auto custom-scrollbar mt-[18px] pr-[19px]'>
              <Table data={rateHistoryData} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard