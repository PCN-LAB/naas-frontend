import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const pieChartOptions = {
    plugins: {
        datalabels: {
            color: 'white',
            formatter: (value, context) => {
                let sum = 0;
                const dataArr = context.chart.data.datasets[0].data;
                dataArr.forEach(data => {
                    sum += data;
                });
                const percentage = ((value * 100) / sum).toFixed(2) + '%';
                return percentage;
            },
        },
        legend: {
            display: true,
            position: 'right',
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
};

const aggregateDataForPieChart = (data) => {
    const labels = data.datasets.map(dataset => dataset.label);
    const aggregatedData = data.datasets.map(dataset => 
        dataset.data.reduce((sum, value) => sum + (value || 0), 0)
    );

    return {
        labels,
        datasets: [
            {
                data: aggregatedData,
                backgroundColor: data.colors,
                hoverBackgroundColor: data.colors,
            },
        ],
    };
};

function PieChart({ chartData }) {
    const pieData = aggregateDataForPieChart(chartData);

    return (
        <div className='flex flex-col h-full'>
            <div>
                <h3 className='text-xl mb-4 ml-8 font-bold'>SIMPLE PIE</h3>
            </div>
            <div>
                <h2 className='text-zinc-400 ml-8'>Statistics</h2>
            </div>
            <div>
                <Pie className='flex w-[600px] h-[430px] mx-auto items-center justify-center' data={pieData} options={pieChartOptions} />
            </div>
        </div>
    );
}

export default PieChart;
