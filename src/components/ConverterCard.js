/* eslint-disable no-script-url */
import React from "react";
import DropBtn from "../components/DropBtn";
import CustomDropdown from "../components/CustomDropdown";
import adminIcon from "../assets/svg/adminIcon.svg";
import SelectField from "./SelectField";
import CustomBtn from "./CustomBtn";

function ConverterCard() {
  const Currency = [
    { value: "USD", label: "USDT"},
    { value: "BTD", label: "BDT"},
    { value: "FTCE", label: "FTCE"},
    { value: "BTC", label: "BTC"}
  ];
  const Currency_From = [
    { value: "BTC", label: "BTC"},
    { value: "IN", label: "IN"},
    { value: "FTCE", label: "FTCE"},
    { value: "USD", label: "USD"}
  ];
  const buttonContent = (
    <div>
      <DropBtn />
    </div>
  );
  const menuItems = [
    { label: "USD", href: "javascript:void(0)", image: adminIcon },
    { label: "BTC", href: "javascript:void(0)", image: adminIcon },
    { label: "FTCE", href: "javascript:void(0)", image: adminIcon },
    { label: "IN", href: "javascript:void(0)", image: adminIcon },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-[#000000] dark:text-[#FFF] text-[20px] font-semibold leading-[28px]">
          Convert
        </p>
        <div>
          <CustomDropdown buttonContent={buttonContent} menuItems={menuItems} />
        </div>
      </div>
      <div className="mt-4">
        <form>
          <div className="relative border dark:border-[#292A32] border-[#E7EAEB] rounded-[7px]">
            <input
              type="text"
              placeholder="100"
              className="w-full sm:w-[308px] text-[15px] font-normal leading-[10px] py-[15px] pl-[17px] pr-[6.5rem] text-[#626D7D] dark:text-white rounded-[7px] outline-none bg-gray-50 dark:bg-[#1C1C25] focus:bg-white focus:border-[#2F80ED]"
            />
            <div className="absolute right-[7px] top-[6px] bg-[#C7E4DB] rounded-[7px] px-2 w-[86px]">
              <SelectField data={Currency} textColor="text-[#26AB5F]" />
            </div>
          </div>

          <div className="relative mt-[21px] border dark:border-[#292A32] border-[#E7EAEB] rounded-[7px]">
            <input
              type="text"
              placeholder="0.044"
              className="w-full sm:w-[308px] text-[15px] font-normal leading-[10px] py-[15px] pl-[17px] pr-[6.5rem] rounded-[7px] text-[##626D7D] dark:text-white outline-none bg-gray-50 dark:bg-[#1C1C25] focus:bg-white focus:border-[#2F80ED]"
            />
            <div className="absolute right-[7px] top-[6px] bg-[#FCF4DB] rounded-[7px] px-2 w-[86px]">
              <SelectField data={Currency_From} textColor="text-[#FF7C04]" />
            </div>
          </div>

          <div>
            <div className="text-center mt-[14px]">
                <CustomBtn onClick={() => {}} 
                  bgColor="#4D91FF" textColor="#FFF" label="Convert Now" Width='100%' />
              </div>
              <p className="text-[#626D7D] dark:text-[#626D7D] text-[11px] font-normal leading-[11px] mt-[12px] sm:w-[290px] word-break">
                  The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.
              </p>
            </div>
        </form>
      </div>
    </div>
  );
}

export default ConverterCard;
