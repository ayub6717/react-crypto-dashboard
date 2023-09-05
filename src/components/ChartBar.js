import { useEffect } from 'react';
import Chart from 'chart.js';
import CustomDropdown from "../components/CustomDropdown";
import adminIcon from "../assets/svg/adminIcon.svg";


export default function ChartBar() {
    const buttonContent = (
        <div>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.34339 7.63536L12.7204 1.77303C13.355 1.08328 12.8393 3.93217e-07 11.8762 3.93217e-07H1.12212C0.90658 -0.000175869 0.69556 0.0589098 0.514325 0.170182C0.33309 0.281454 0.189323 0.440196 0.100242 0.627397C0.0111599 0.814598 -0.0194626 1.02232 0.012044 1.2257C0.0435505 1.42907 0.13585 1.61947 0.277887 1.7741L5.65494 7.63429C5.76017 7.74916 5.88995 7.84121 6.03556 7.90429C6.18117 7.96737 6.33924 8 6.49916 8C6.65909 8 6.81716 7.96737 6.96277 7.90429C7.10838 7.84121 7.23816 7.74916 7.34339 7.63429V7.63536Z" fill="black"/>
            </svg>
        </div>
      );
      const menuItems = [
        { label: "USD", href: "javascript:void(0)", image: adminIcon },
        { label: "BTC", href: "javascript:void(0)", image: adminIcon },
        { label: "FTCE", href: "javascript:void(0)", image: adminIcon },
        { label: "IN", href: "javascript:void(0)", image: adminIcon },
      ];

    useEffect(() => {
        let config = {
            type: 'bar',
            data: {
                labels: [
                    '$23,000',
                    '$13,000',
                    '$25,000',
                    '$63,000',
                    '$23,000',
                    '$44,000',
                    '$21,000',
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#032658',
                        borderColor: '#032658',
                        data: [30, 78, 56, 34, 100, 45, 13],
                        fill: false,
                        barThickness: 8,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: '#4D91FF',
                        borderColor: '#4D91FF',
                        data: [27, 68, 86, 74, 10, 4, 87],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Orders Chart',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                legend: {
                   
                    align: 'end',
                    position: 'bottom',
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: '#4D91FF',
                                zeroLineColor: '#4D91FF',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.2)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById('bar-chart').getContext('2d');
        window.myBar = new Chart(ctx, config);
    }, []);
    return (
        <div className='py-[35px] px-[43px]'>
            <div className='flex flex-col 3xl:flex-row justify-between items-center'>
                <div className='flex justify-between items-center w-full sm:w-[334px] bg-[#626d7d1f] p-5 rounded-[12px]'>
                    <div>
                        <p className="uppercase text-black dark:text-white text-[20px] font-semibold leading-[28px]">
                            BTCUSDT
                        </p>
                        <p className="text-[#626D7D] text-[20px] font-semibold leading-[28px]">Bitcoin</p>
                    </div>
                    <div className='flex justify-between items-center gap-[15px]'>
                        <div>
                            <p className="uppercase text-black dark:text-white text-[13px] font-medium leading-[22px]">
                                $23,738
                            </p>
                            <span className="rounded-[60px] px-2 text-[11px] leading-[22px] font-semibold word-break text-[#219653] bg-[#2196543c]">+14.67%</span>
                        </div>
                        <div>
                            <div>
                                <CustomDropdown buttonContent={buttonContent} menuItems={menuItems} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[7px] mt-3 3xl:mt-0'>
                    <span className='text-[#0060FF] dark:bg-[#131313] bg-[#b2daf8bb] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        1H
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        3H
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        5H
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        1D
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        1W
                    </span>
                    <span className='text-black dark:text-white bg-[#f8f8f8] dark:bg-[#13131367] text-[10px] font-semibold leading-[22px] px-3 py-1 rounded'>
                        1M
                    </span>
                </div>
            </div>
            <div>
                <div className="relative mt-5">
                    <canvas id="bar-chart"></canvas>
                </div>
            </div>
        </div>
    );
}
