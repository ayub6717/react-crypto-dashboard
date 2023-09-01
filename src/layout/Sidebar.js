import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import CompanyLogo from "../assets/images/company-logo.png";

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
                    isActive
                      ? "flex items-center text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg bg-[#D5E6FB] text-[#0060FF]"
                      : "flex items-center text-[18px] leading-[21px] font-medium px-[29px] py-[14px] text-[#000000] rounded-lg"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  to="./markets"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg bg-[#D5E6FB] text-[#0060FF]"
                      : "flex items-center gap-4 text-[18px] leading-[21px] font-medium px-[29px] py-[14px] text-[#000000] rounded-lg"
                  }
                >
                  Markets
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/transactions"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg bg-[#D5E6FB] text-[#0060FF]"
                      : "flex items-center gap-4 text-[18px] leading-[21px] font-medium px-[29px] py-[14px] text-[#000000] rounded-lg"
                  }
                >
                  Transactions
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 text-[#000000]">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg bg-[#D5E6FB] text-[#0060FF]"
                      : "flex items-center gap-4 text-[18px] leading-[21px] font-medium px-[29px] py-[14px] text-[#000000] rounded-lg"
                  }
                >
                  {/* <Icon name="map" size="2xl" /> */}
                  Profile
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 text-[#000000]">
                <NavLink
                  to="/setting"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center text-[18px] leading-[21px] font-medium px-[29px] py-[14px] rounded-lg bg-[#D5E6FB] text-[#0060FF]"
                      : "flex items-center gap-4 text-[18px] leading-[21px] font-medium px-[29px] py-[14px] text-[#000000] rounded-lg"
                  }
                >
                  {/* <Icon name="map" size="2xl" /> */}
                  Setting
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
