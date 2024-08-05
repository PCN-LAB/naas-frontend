import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const histogramChartOptions = {
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

const Dropdown = ({ options, selectedOption, onChange }) => {
    return (
        <select value={selectedOption} onChange={(e) => onChange(e.target.value)} className="mb-4 p-2 border border-gray-300 rounded">
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

const HistogramGraph = ({ chartData }) => {
    const [selectedKeyword, setSelectedKeyword] = useState('');

    useEffect(() => {
        if (chartData.keywords && chartData.keywords.length > 0) {
            setSelectedKeyword(chartData.keywords[0]);
        }
    }, [chartData.keywords]);

    const handleKeywordChange = (keyword) => {
        setSelectedKeyword(keyword);
    };

    if (!chartData.keywords || chartData.keywords.length === 0) {
        return <div>Loading...</div>;
    }

    const filteredData = {
        labels: chartData.labels,
        datasets: chartData.datasets.filter(dataset => dataset.label === selectedKeyword),
    };

    return (
        <div className='flex flex-col h-full'>
            <div className='mb-4'>
                <h3 className='text-xl font-bold'>Histogram Chart</h3>
            </div>
            <Dropdown
                options={chartData.keywords}
                selectedOption={selectedKeyword}
                onChange={handleKeywordChange}
            />
            <div className='mb-4'>
                <h2 className='text-zinc-400'>Statistics for {selectedKeyword}</h2>
            </div>
            <div className='w-full h-[400px] mx-auto'>
                <Bar data={filteredData} options={histogramChartOptions} />
            </div>
        </div>
    );
};

export default HistogramGraph;
