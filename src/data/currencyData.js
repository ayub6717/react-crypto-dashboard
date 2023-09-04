// customerData.js
import UpIcon from '../assets/svg/UpIcon.svg'
import DownIcon from '../assets/svg/DownIcon.svg'
import IconWalet from '../assets/images/IconWallet.png';
import BTC from '../assets/images/IconBTC.png';
import SOL from '../assets/images/IconSOL.png';
import ETH from '../assets/images/IconETH.png';
import VectorIcon from '../assets/images/Vector.png'
import VectorIcon2 from '../assets/images/Vector2.png'
import VectorIcon3 from '../assets/images/Vector3.png'


export const currentRateDate = [
    {
      currency: 'BTCUSDT',
      digital_currency: 'Bitcoin ',
      amount: '$23,495',
      commission: '+23.4%',
    },
    {
      currency: 'AXSUSDT',
      digital_currency: 'Axie Infinity',
      amount: '$15.9',
      commission: '-7.8%',
    },
    {
      currency: 'ETHUSDT',
      digital_currency: 'Ethereum',
      amount: '$15,978',
      commission: '-0.3%',
    },
    {
      currency: 'SOLUSDT',
      digital_currency: 'Solana',
      amount: '$495',
      commission: '+11.1%',
    },
    {
      currency: 'BNBUSDT',
      digital_currency: 'Binance',
      amount: '$267',
      commission: '+6.7%',
    },
    {
      currency: 'ADAUSDT',
      digital_currency: 'Cardano',
      amount: '$0.49',
      commission: '-1.4%',
    },
    {
      currency: 'SOLUSDT',
      digital_currency: 'Solana',
      amount: '$495',
      commission: '+11.1%',
    },
  ];
  
  export const rateHistoryData = [
    {
      img: DownIcon,
      to_currency: 'Deposit ',
      to_amount: '+$23,738',
      time: '11:34 PM',
      badge: 'Pending',
    },
    {
      img: UpIcon,
      to_currency: 'SANDUSDT',
      to_amount: '-$576',
      time: '06:01 AM',
      badge: 'Done',
    },
    {
      img: DownIcon,
      to_currency: 'DOGEUSDT',
      to_amount: '+$3500',
      time: '02:10 AM',
      badge: 'Rejected',
    },
    {
      img: UpIcon,
      to_currency: 'FTMUSDT',
      to_amount: '-$791',
      time: '06:45 PM',
      badge: 'Pending',
    },
    {
      img: DownIcon,
      to_currency: 'DOGEUSDT',
      to_amount: '+$3500',
      time: '02:10 AM',
      badge: 'Done',
    },
    {
      img: UpIcon,
      to_currency: 'FTMUSDT',
      to_amount: '-$791',
      time: '06:45 PM',
      badge: 'Rejected',
    },
  ];

  export const cardData = [
    {
      id: 1,
      icon: BTC,
      vector: VectorIcon2,
      name: "BTCUSDT",
      description: "Bitcoin",
      price: "$23,738",
      pnlDaily: {
        value: "-$2560.78",
        percentage: "+14.67%",
      },
    },
    {
      id: 2,
      icon: ETH,
      vector: VectorIcon,
      name: "ETHUSDT",
      description: "Ethereum",
      price: "$1,950",
      pnlDaily: {
        value: "+$350.45",
        percentage: "-18.0%",
      },
    },
    {
      id: 3,
      icon: SOL,
      vector: VectorIcon3,
      name: "LTCUSDT",
      description: "Litecoin",
      price: "$150",
      pnlDaily: {
        value: "+$25.60",
        percentage: "+15.5%",
      },
    },
  ]

  export const BalanceData = [
    {
      id: 1,
      icon: IconWalet,
      name: "Estimated Balance",
      description: "Bitcoin",
      balance: "$123,987",
      mntProfit: {
        value: "-$2560.78",
        percentage: "15.87%",
      },
    },
  ]
  
  