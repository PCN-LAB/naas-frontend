import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';



const areaChartData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
        {
            label: 'Rice',
            data: [0.4, 0.6, 0.5, 0.7, 0.6, 0.3, 0.2, 0.1, 0.2, 0.4, 0.6, 0.5],
            borderColor: 'purple',
            backgroundColor: 'rgba(128, 0, 128, 0.4)',
            fill: true,
        },
        {
            label: 'Sauce',
            data: [0.6, 0.8, 0.6, 0.5, 0.7, 0.4, 0.2, 0.1, 0.3, 0.5, 0.8, 0.6],
            borderColor: 'orange',
            backgroundColor: 'rgba(255, 165, 0, 0.4)',
            fill: true,
        },
        {
            label: 'Salt',
            data: [0.5, 0.9, 0.8, 1.0, 0.9, 0.7, 0.6, 0.5, 0.4, 0.6, 0.9, 0.8],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.4)',
            fill: true,
        },
        {
            label: 'Sugar',
            data: [0.9, 1.0, 0.9, 1.1, 1.0, 0.8, 0.7, 0.6, 0.5, 0.7, 1.0, 0.9],
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
            fill: true,
        },
    ],
};
const areaChartOptions = {
    plugins: {
        legend: {
            display: true,
            
            position: 'bottom', // Set legend position to bottom
            labels: {
                color: 'black', // Set legend text color
                font: {
                    size: 14, // Set legend font size
                },
                padding: 20, // Optional: Add padding to legend items
                boxWidth: 10, // Set the width of the legend boxes
                boxHeight: 10, // Set the height of the legend boxes (should be equal to boxWidth for circles)
                usePointStyle: true, // Use point style (circles) instead of boxes
            },
        },
    },
    elements: {
        line: {
            tension: 0.4,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};


function AreaChart() {
    return (
       
        <div className='h-full'>
            
            <div>
                <h3 className='text-xl mb-4 font-bold'>AREA CHART</h3>
            </div>
            <div>
                <h2 className='text-zinc-400'>Statistics</h2>
            </div>
            <div className='w-full mx-auto mt-8'>
                    <Line data={areaChartData} options={areaChartOptions} />
            </div>
            
        </div>
    );
}

export default AreaChart;
