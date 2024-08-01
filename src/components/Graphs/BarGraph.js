import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
const barChartOptions = {
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: 'black',
                font: {
                    size: 14,
                },
                padding: 20,
                boxWidth: 10,
                boxHeight: 10,
                usePointStyle: true,
            },
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
            beginAtZero: true,
            ticks: {
                callback: (value) => value.toFixed(2),
            },
        },
    },
};

function BarGraph({ chartData }) {
    return (
        <div className='flex flex-col h-full'>
            <div className='mb-4'>
                <h3 className='text-xl font-bold'>BAR STACKED BY SIGN</h3>
            </div>
            <div className='mb-4'>
                <h2 className='text-zinc-400'>Statistics</h2>
            </div>
            <div className='w-full h-[400px] mx-auto'>
                <Bar data={chartData} options={barChartOptions} />
            </div>
        </div>
    );
}

export default BarGraph;
