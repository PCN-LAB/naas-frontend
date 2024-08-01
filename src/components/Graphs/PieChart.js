import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const pieChartOptions = {
    animation: {
        animateRotate: true,
        animateScale: true,
        duration: 2000,
        easing: 'easeOutBounce',
    },
    plugins: {
        tooltip: {
            enabled: true,
            callbacks: {
                label: (context) => {
                    const data = context.dataset.data;
                    const sum = data.reduce((a, b) => a + b, 0);
                    const value = context.raw;
                    const percentage = ((value / sum) * 100).toFixed(2) + '%';
                    return `${context.label}: ${value} (${percentage})`;
                },
                title: () => '', // Disable the default title
            },
            backgroundColor: 'rgba(0,0,0,0.7)', // Dark background for the tooltip
            titleFont: { size: 16 },
            bodyFont: { size: 14 },
            bodySpacing: 4,
            padding: 10,
            cornerRadius: 4,
            displayColors: false, // Hide the color box in the tooltip
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
    hover: {
        mode: 'nearest',
        intersect: true,
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
                hoverBorderWidth: 30,
                hoverBorderColor: data.colors.map(color => `${color}66`), // Lighten color for hover effect
                hoverOffset: 20,
            },
        ],
    };
};

function PieChart({ chartData }) {
    const [selectedSegment, setSelectedSegment] = useState(null);
    const pieData = aggregateDataForPieChart(chartData);

    const handleClick = (event, elements) => {
        if (elements.length) {
            const index = elements[0].index;
            setSelectedSegment(index);
        } else {
            setSelectedSegment(null);
        }
    };

    return (
        <div className='flex flex-col h-full'>
            <div>
                <h3 className='text-xl mb-4 ml-8 font-bold'>SIMPLE PIE</h3>
            </div>
            <div>
                <h2 className='text-zinc-400 ml-8'>Statistics</h2>
            </div>
            <div className='relative'>
                <Pie
                    className='flex w-[600px] h-[430px] mx-auto items-center justify-center'
                    data={{
                        ...pieData,
                        datasets: pieData.datasets.map((dataset, i) => ({
                            ...dataset,
                            borderColor: dataset.data.map((_, index) =>
                                selectedSegment === index ? dataset.backgroundColor[index] : 'transparent'
                            ),
                            borderWidth: dataset.data.map((_, index) =>
                                selectedSegment === index ? 4 : 35
                            ),
                        })),
                    }}
                    options={pieChartOptions}
                    onElementsClick={handleClick}
                />
            </div>
        </div>
    );
}

export default PieChart;
