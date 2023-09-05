import React from "react";

function InputField() {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full text-[15px] font-normal leading-[10px] py-[13px] pl-[41px] pr-16 text-[#2c2c2c] dark:text-white border rounded-[57px] outline-none bg-gray-50 dark:border-[#292A32] border-[#E7EAEB] dark:bg-[#1C1C25] focus:bg-white focus:border-[#2F80ED]"
        />
        <div className="absolute right-[26px] top-[17px] ">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.69724 15.3945C9.40504 15.3941 11.0636 14.8224 12.4089 13.7704L16.6385 18L17.999 16.6395L13.7694 12.4099C14.822 11.0645 15.3941 9.40549 15.3945 7.69724C15.3945 3.45318 11.9413 0 7.69724 0C3.45318 0 0 3.45318 0 7.69724C0 11.9413 3.45318 15.3945 7.69724 15.3945ZM7.69724 1.92431C10.881 1.92431 13.4702 4.51347 13.4702 7.69724C13.4702 10.881 10.881 13.4702 7.69724 13.4702C4.51347 13.4702 1.92431 10.881 1.92431 7.69724C1.92431 4.51347 4.51347 1.92431 7.69724 1.92431Z"
              fill="#C4CACD"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default InputField;
