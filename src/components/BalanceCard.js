import React from "react";
import EyeIcon from '../assets/svg/Eye.svg'
function BalanceCard({ data }) {
    const textColor = data.mntProfit.value.startsWith('-')
    ? 'text-[#EB5757]'
    : 'text-[#219653]';

    const bgColor = data.mntProfit.percentage.startsWith('-')
    ? 'text-[#EB5757] bg-[#eb575738]'
    : 'text-[#219653] bg-[#2196543c]';
  return (
    <>
      <div className="rounded-xl px-[20px] py-[22px] bg-[#FFF] dark:bg-[#1C1C25]">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="w-[44px] h-[33px]">
              <img
                className="object-cover w-full max-h-[43px]"
                src={data.icon}
                alt="img"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#000] dark:text-white text-[16px] leading-[28px] font-semibold word-break mt-2">
                {data.name}
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-6 h-6 mt-[10px] mr-[3px]"
              src={EyeIcon}
              alt="img"
            />
          </div>
        </div>
        <div className="mt-[29px]">
          <p className="text-[#000] dark:text-white text-[30px] leading-[28px] font-semibold word-break">
            {data.balance}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-[#626D7D] text-[13px] leading-[22px] font-medium word-break">
            Monthly Profit
          </p>
          <p className={`text-[13px] leading-[22px] font-semibold word-break ${textColor}`}>
            {data.mntProfit.value}
          </p>
          <span className={`rounded-[60px] px-2 text-[11px] leading-[22px] font-semibold word-break ${bgColor}`}>
            {data.mntProfit.percentage}
          </span>
        </div>
      </div>
    </>
  );
}

export default BalanceCard;
