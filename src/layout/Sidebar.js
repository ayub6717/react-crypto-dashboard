import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import CompanyLogo from "../assets/images/company-logo.png";
import LogoutIcon from "../assets/svg/Logout-icon.svg";
import { dashboardToSettingsData, helpData } from "../data/IconData";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-[19.2rem]");
  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden dark:bg-[#1C1C25] border-r border-[#DEE5EC] dark:border-[#202128] bg-white w-[307px] z-10 py-4 px-[50px] transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <NavLink to="/" className="mt-[26px] text-center w-full inline-block">
            <img
              className="w-[201px] h-[32px] object-cover"
              src={CompanyLogo}
              alt="img"
            />
          </NavLink>

          <div className="flex flex-col">
            <ul className="flex-col min-w-full flex gap-4 list-none mt-[71px]">
              {dashboardToSettingsData.map(
                ({ id, icon, inactiveIcon, link, text, exact }) => (
                  <li key={id} className="rounded-lg">
                    <NavLink
                      to={link}
                      exact={`${exact}`}
                      className={({ isActive }) => `
                      flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg
                      ${isActive ? "bg-[#D5E6FB] text-[#0060FF]" : "text-[#000000]"}
                    `}
                    >
                      {({ isActive }) => (
                        <>
                          <img
                            src={isActive ? icon : inactiveIcon}
                            alt={isActive ? "Active" : "Inactive"}
                          />
                          <span>{text}</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                )
              )}

              <div className="my-[32px] flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="175"
                  height="2"
                  viewBox="0 0 175 2"
                  fill="none"
                >
                  <path
                    d="M0 1H175"
                    stroke="#E8EAEC"
                    strokeOpacity="0.78"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {helpData.map(({ id, icon, inactiveIcon, link, text, exact }) => (
                <li key={id} className="rounded-lg mb-4">
                  <NavLink
                    to={link}
                    exact={`${exact}`}
                    className={({ isActive }) => `
                    flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg
                    ${isActive ? "bg-[#D5E6FB] text-[#0060FF]" : "text-[#000000]"}
                  `}
                  >
                    {({ isActive }) => (
                      <>
                        <img
                          src={isActive ? icon : inactiveIcon}
                          alt={isActive ? "Active" : "Inactive"}
                        />
                        <span>{text}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}

              <li className="rounded-lg mb-4 hover:text-[#0060FF]">
                <button className="flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg">
                  <>
                    <img src={LogoutIcon} alt="Logout" />
                    <span>Log Out</span>
                  </>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
