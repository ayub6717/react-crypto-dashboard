import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import CompanyLogo from "../assets/images/company-logo.png";
import DashIcon from "../assets/svg/Dashboard-icon.svg";
import DashIconInactive from "../assets/svg/Dashboard-icon-inactive.svg";
import MarketsIcon from "../assets/svg/Markets-active.svg"
import MarketsIconInactive from "../assets/svg/Markets-inactive.svg"
import TransactionIcon from "../assets/svg/Transaction-icon.svg"
import TransactionIconInactive from "../assets/svg/Transaction-active.svg"
import ProfileIcon from "../assets/svg/Profile-icon.svg";
import SettingsIcon from "../assets/svg/Settings-icon.svg";
import HelpIcon from "../assets/svg/Help-icon.svg";
import LogoutIcon from "../assets/svg/Logout-icon.svg";
import ActiveProfileIcon from "../assets/svg/ActiveProfile-icon.svg";
import ActiveSettingsIcon from "../assets/svg/ActiveSettings-icon.svg";
import ActiveHelpIcon from "../assets/svg/ActiveHelp-icon.svg";
// import ActiveLogoutIcon from "../assets/svg/ActiveLogout-icon.svg";






export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-[19.2rem]");
  return (
    <>
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-[307px] z-10 py-4 px-[50px] transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <NavLink to="/" className="mt-[26px] text-center w-full inline-block">
            <img className="w-[201px] h-[32px] object-cover" src={CompanyLogo} alt="img" />
          </NavLink>
          <div className="flex flex-col">
            <ul className="flex-col min-w-full flex list-none mt-[71px]">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/"
                  exact="true"
                  className={({ isActive }) =>
                  `flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg ${
                    isActive
                      ? 'bg-[#D5E6FB] text-[#0060FF]'
                      : 'text-[#000000]'
                  }`
                }
                >
                  {({ isActive }) => (
                      <>
                      <img src={isActive ? DashIcon : DashIconInactive} alt={isActive ? "Active" : "Inactive"} />
                      <span>Dashboard</span>
                      </>
                  )}
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="./markets"
                  exact="true"
                  className={({ isActive }) =>
                  `flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg ${
                    isActive
                      ? 'bg-[#D5E6FB] text-[#0060FF]'
                      : 'text-[#000000]'
                  }`
                }
                >
                  {({ isActive }) => (
                      <>
                      <img src={isActive ? MarketsIcon : MarketsIconInactive} alt={isActive ? "Active" : "Inactive"} />
                      <span>Markets</span>
                      </>
                  )}
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to="./transactions"
                  exact="true"
                  className={({ isActive }) =>
                  `flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg ${
                    isActive
                      ? 'bg-[#D5E6FB] text-[#0060FF]'
                      : 'text-[#000000]'
                  }`
                }
                >
                  {({ isActive }) => (
                      <>
                      <img src={isActive ? TransactionIconInactive : TransactionIcon} alt={isActive ? "Active" : "Inactive"} />
                      <span>Transactions</span>
                      </>
                  )}
                </NavLink>
              </li>

              <li className="rounded-lg mb-4">
                <NavLink
                  to="./profile"
                  exact="true"
                  className={({ isActive }) =>
                  `flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg ${
                    isActive
                      ? 'bg-[#D5E6FB] text-[#0060FF]'
                      : 'text-[#000000]'
                  }`
                }
                >
                  {({ isActive }) => (
                      <>
                      <img src={isActive ? ActiveProfileIcon  : ProfileIcon } alt={isActive ? "Active" : "Inactive"} />
                      <span>Profile</span>
                      </>
                  )}
                </NavLink>
              </li>
              <li className="rounded-lg">
                <NavLink
                  to="./setting"
                  exact="true"
                  className={({ isActive }) =>
                  `flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg ${
                    isActive
                      ? 'bg-[#D5E6FB] text-[#0060FF]'
                      : 'text-[#000000]'
                  }`
                }
                >
                  {({ isActive }) => (
                      <>
                      <img src={isActive ? ActiveSettingsIcon   : SettingsIcon  } alt={isActive ? "Active" : "Inactive"} />
                      <span>Setting</span>
                      </>
                  )}
                </NavLink>
              </li>

              <div className="mt-[49px] flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="175" height="2" viewBox="0 0 175 2" fill="none">
                  <path d="M0 1H175" stroke="#E8EAEC" strokeOpacity="0.78" strokeWidth="1.5"/>
                </svg>
              </div>

              <li className="rounded-lg mt-[49px] mb-4">
                <NavLink
                  to="./help"
                  exact="true"
                  className={({ isActive }) =>
                  `flex items-center gap-[14px] text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg ${
                    isActive
                      ? 'bg-[#D5E6FB] text-[#0060FF]'
                      : 'text-[#000000]'
                  }`
                }
                >
                  {({ isActive }) => (
                      <>
                      <img src={isActive ? ActiveHelpIcon : HelpIcon   } alt={isActive ? "Active" : "Inactive"} />
                      <span>Help</span>
                      </>
                  )}
                </NavLink>
              </li>

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
