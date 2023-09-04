import React from "react";
import Table from "./Table";
import {currentRateDate} from '../data/currencyData';
import Button from "./Button";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-[17px] pb-4 flex-row justify-end"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                  (openTab === 1
                    ? "text-bermuda dark:bg-[#131313] bg-silver"
                    : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                    "px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                    (openTab === 2
                      ? "text-bermuda dark:bg-[#131313] bg-silver"
                      : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")
                  }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Metaverse
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                  (openTab === 3
                    ? "text-bermuda dark:bg-[#131313] bg-silver"
                    : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Gaming
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                  (openTab === 4
                    ? "text-bermuda dark:bg-[#131313] bg-silver"
                    : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                 Defi
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "px-[13.5px] py-1 rounded-[7px] block text-[10px] font-semibold leading-[22px] text-center " +
                  (openTab === 5
                    ? "text-bermuda dark:bg-[#131313] bg-silver"
                    : "text-[#000] dark:text-white bg-deepsilver dark:bg-[#131313]")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                 NFT
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col break-words bg-white dark:bg-[#1C1C25]">
            <div className="mt-[13px]">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className='xl:w-[419px] h-[270px] overflow-auto custom-scrollbar pr-[19px]'>
                        <Table data={currentRateDate} />
                    </div>
                    <div className=" float-right pr-6 mt-[13px]">
                      <Button />
                    </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs />
    </>
  );
}