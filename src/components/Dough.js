import {Doughnut} from 'react-chartjs-2'

function DoughnutChart() {

const data = {
    labels: ['BTC','ETH','ADA','Others'],
    datasets: [
        {
            label: 'Attendance for Week 1',
            data: [25,24,25,25],
            backgroundColor: ['#4D91FF',
            '#002D67',
            '#00DCF8',
            'rgba(153,102,255,1)' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
            backgroundImage: 'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center',
        }
    ]
}

const options = {
    responsive: true,
    legend: {
        align: 'center',
        position: 'bottom',
    },
    plugins: {
        title: {
            display: true,
            text: 'Doughnut Chart',
            color:'blue',
            font: {
                size:34
            },
            padding:{
                top:30,
                bottom:30
            },
            responsive:true,
            animation:{
                animateScale: true,
                color: true            
            },
        }
    }
    
}
    return (
        <div>
           <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart