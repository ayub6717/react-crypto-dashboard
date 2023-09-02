import React from 'react'
import IconWalet from '../assets/images/IconWallet.png'
import VectorIcon from '../assets/images/Vector.png'
import EyeIcon from '../assets/svg/Eye.svg'
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
                  <p className='text-[#000] text-[16px] leading-[28px] font-semibold word-break'>Estimated Balance</p>
                  <p className='text-[#626D7D] text-[13px] leading-[22px] font-medium word-break'>Bitcoin</p>
                </div>
              </div>
              <div className='relative'>
                <img className='w-6 h-6' src={EyeIcon} alt="img" />
                <div className='absolute right-2 top-[28px] w-[133px] h-[56px]'>
                    <img className='object-cover w-full max-h-[56px]' src={VectorIcon } alt="img" />
                </div>
              </div>
            </div>
            <div className='mt-[18px]'>
               <p className='text-[#000] text-[20px] leading-[22px] font-semibold word-break'>$23,738</p>
            </div>
            <div className='flex justify-between items-center mt-[19px]'>
              <p className='text-[#626D7D] text-[13px] leading-[22px] font-medium word-break'>Monthly Profit</p>
              <p className='text-[#219653] text-[13px] leading-[22px] font-semibold word-break'>+$2560.78</p>
              <span className='bg-[#2196543c] rounded-[60px] px-2 text-[#219653] text-[11px] leading-[22px] font-semibold word-break'>+14.67%</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard