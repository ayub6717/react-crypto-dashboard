/* eslint-disable no-script-url */
import React from "react";
import DropBtn from "../components/DropBtn";
import CustomDropdown from "../components/CustomDropdown";
import user from "../assets/svg/user.svg";
import adminIcon from "../assets/svg/adminIcon.svg";
import logout from "../assets/svg/logout.svg";
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
    { label: "My Account", href: "javascript:void(0)", image: user },
    { label: "Admin Panel", href: "javascript:void(0)", image: adminIcon },
    { label: "Vendor Panel", href: "javascript:void(0)", image: adminIcon },
    { label: "Logout", href: "javascript:void(0)", image: logout },
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
          <div className="relative">
            <input
              type="text"
              placeholder="100"
              className="w-[308px] text-[15px] font-normal leading-[10px] py-[15px] pl-[17px] pr-2 text-[#2c2c2c] dark:text-white border rounded-[7px] outline-none bg-gray-50 dark:border-[#292A32] border-[#E7EAEB] dark:bg-[#1C1C25] focus:bg-white focus:border-[#2F80ED]"
            />
            <div className="absolute right-[7px] top-[6px] bg-[#21965464] rounded-[7px] px-2 w-[86px]">
              <SelectField data={Currency} />
            </div>
          </div>

          <div className="relative mt-[21px]">
            <input
              type="text"
              placeholder="100"
              className="w-[308px] text-[15px] font-normal leading-[10px] py-[15px] pl-[17px] pr-2 text-[#2c2c2c] dark:text-white border rounded-[7px] outline-none bg-gray-50 dark:border-[#292A32] border-[#E7EAEB] dark:bg-[#1C1C25] focus:bg-white focus:border-[#2F80ED]"
            />
            <div className="absolute right-[7px] top-[6px]  bg-[#3c2e056b] rounded-[7px] px-2 w-[86px]">
              <SelectField data={Currency_From} />
            </div>

            <div className="text-center mt-[14px]">
              <CustomBtn onClick={() => {}} 
                bgColor="#4D91FF" textColor="#FFF" label="Convert Now" Width='100%' />
            </div>
            <p className="text-[#626D7D] dark:text-[#626D7D] text-[11px] font-normal leading-[11px] mt-[12px] w-[290px] word-break">
                The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConverterCard;
