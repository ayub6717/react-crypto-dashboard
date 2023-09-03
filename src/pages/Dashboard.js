import React from 'react'
import IconWalet from '../assets/images/IconWallet.png'
import VectorIcon from '../assets/images/Vector.png'
import EyeIcon from '../assets/svg/Eye.svg'
import Table from '../components/Table'
import {rateHistoryData} from '../data/currencyData';
import TabsRender from '../components/Tabs'
function Dashboard() {
  return (
    <div className='py-[28px]'>
        <div className='grid grid-cols-4 gap-[25px]'>
          <div className='rounded-xl px-[20px] py-[22px] bg-[#FFF]'>
            <div className='flex justify-between'>
              <div className='flex gap-4'>
                <div className='w-[44px] h-[33px]'>
                  <img className='object-cover w-full max-h-[43px]' src={IconWalet} alt="img" />
                </div>
                <div className="flex flex-col">
                  <p className='text-[#000] text-[16px] leading-[28px] font-semibold word-break mt-2'>Estimated Balance</p>
                </div>
              </div>
              <div className='relative'>
                <img className='w-6 h-6 mt-[10px] mr-[3px]' src={EyeIcon} alt="img" />
              </div>
            </div>
            <div className='mt-[29px]'>
               <p className='text-[#000] text-[30px] leading-[28px] font-semibold word-break'>$23,738</p>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <p className='text-[#626D7D] text-[13px] leading-[22px] font-medium word-break'>Monthly Profit</p>
              <p className='text-[#219653] text-[13px] leading-[22px] font-semibold word-break'>+$2560.78</p>
              <span className='bg-[#2196543c] rounded-[60px] px-2 text-[#219653] text-[11px] leading-[22px] font-semibold word-break'>+14.67%</span>
            </div>
          </div>
          <div className='rounded-xl px-[20px] py-[22px] bg-[#FFF]'>
            <div className='flex justify-between'>
              <div className='flex gap-4'>
                <div className='w-[44px] h-[33px]'>
                  <img className='object-cover w-full max-h-[43px]' src={IconWalet} alt="img" />
                </div>
                <div className="flex flex-col">
                  <p className='text-[#000] text-[16px] leading-[28px] font-semibold word-break'>BTCUSDT</p>
                  <p className='text-[#626D7D] text-[13px] leading-[22px] font-medium word-break'>Bitcoin</p>
                </div>
              </div>
              <div className='relative'>
                <div className='absolute right-2 top-[28px] w-[133px] h-[56px]'>
                    <img className='object-cover w-full max-h-[56px]' src={VectorIcon } alt="img" />
                </div>
              </div>
            </div>
            <div className='mt-[18px]'>
               <p className='text-[#000] text-[20px] leading-[22px] font-semibold word-break'>$23,738</p>
            </div>
            <div className='flex justify-between items-center mt-[19px]'>
              <p className='text-[#626D7D] text-[13px] leading-[22px] font-medium word-break'>PNL Daily</p>
              <p className='text-[#219653] text-[13px] leading-[22px] font-semibold word-break'>+$2560.78</p>
              <span className='bg-[#2196543c] rounded-[60px] px-2 text-[#219653] text-[11px] leading-[22px] font-semibold word-break'>+14.67%</span>
            </div>
          </div>
        </div>
        <div className="flex mt-[27px] gap-[25px]">
          <div className="flex-auto bg-white dark:bg-[#1C1C25] rounded-[15px]"> 
            
          </div>
          <div className="bg-white dark:bg-[#1C1C25] rounded-[15px] py-5 px-[39px] w-[478px] relative">
            <p className='absolute left-[39px] top-[37px] text-[#000] text-[20px] font-semibold leading-[28px]'>Markets</p>
              <TabsRender />
          </div>
        </div>

        <div className="flex mt-[27px] gap-[25px]">
          <div className="flex-auto bg-white dark:bg-[#1C1C25] rounded-[15px]"> 
            
          </div>
          <div className="flex-auto bg-white dark:bg-[#1C1C25] rounded-[15px]"> 
            
          </div>
          <div className="bg-white dark:bg-[#1C1C25] rounded-[15px] pt-5 px-[39px]">
            <div className='flex justify-between items-center'>
              <p className='text-[#000] text-[20px] font-semibold leading-7'>History</p>
              <button className='text-[#8c8c8c] text-[10px] font-semibold leading-[22px] border border-[#E5E5E5] rounded-[7px] px-2.5 py-1 inline-block'>View All</button>
            </div>
            <div className='w-[544px] h-[200px] overflow-auto custom-scrollbar mt-[18px]'>
              <Table data={rateHistoryData} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard