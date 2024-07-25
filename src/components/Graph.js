import React, { useState } from 'react';
import Logo from '../layout/Logo';
import Sidebar from './Vertical-nav/vertical-nav';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { FaTimes } from 'react-icons/fa';

const initialData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
        {
            id: 1,
            label: 'Sauce',
            data: [0.5, 0.8, 0.6, 0.9, 0.7, 0.4, 0.2, 0.1, 0.3, 0.5, 0.8, 0.6],
            borderColor: 'orange',
            backgroundColor: 'orange',
            borderDash: [5, 5],
            fill: false,
        },
        {
            id: 2,
            label: 'Salt',
            data: [0.7, 0.9, 0.8, 1.0, 0.9, 0.7, 0.6, 0.5, 0.4, 0.6, 0.9, 0.8],
            borderColor: 'blue',
            backgroundColor: 'blue',
            borderDash: [5, 5],
            fill: false,
        },
        {
            id: 3,
            label: 'Sugar',
            data: [0.9, 1.0, 0.9, 1.1, 1.0, 0.8, 0.7, 0.6, 0.5, 0.7, 1.0, 0.9],
            borderColor: 'red',
            backgroundColor: 'red',
            borderDash: [5, 5],
            fill: false,
        },
        {
            id: 4,
            label: 'Rice',
            data: [0.4, 0.6, 0.5, 0.7, 0.6, 0.3, 0.2, 0.1, 0.2, 0.4, 0.6, 0.5],
            borderColor: 'purple',
            backgroundColor: 'purple',
            borderDash: [5, 5],
            fill: false,
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: false, // Hide the default legend
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

function Graphs() {
    const [data, setData] = useState(initialData);

    const handleRemoveDataset = (datasetId) => {
        setData((prevData) => ({
            ...prevData,
            datasets: prevData.datasets.filter((dataset) => dataset.id !== datasetId),
        }));
    };

    const legend = () => {
        return (
            <div className='flex flex-row gap-8 ml-8' >
                {data.datasets.map((dataset) => (
                    <div
                        key={dataset.id}
                        className='flex items-center space-x-2 border border-gray-300 rounded-md p-2'
                    >
                        {/* Small color dot */}
                        <div
                            className='w-3 h-3 rounded-full'
                            style={{ backgroundColor: dataset.borderColor }}
                        ></div>
    
                        {/* Dataset label */}
                        <span className='text-sm'>{dataset.label}</span>
    
                        {/* Remove button */}
                        <button
                            onClick={() => handleRemoveDataset(dataset.id)}
                            className='flex items-center text-sm text-black-500 hover:text-black-700'
                        >
                            <FaTimes size={10} />
                        </button>
                    </div>
                ))}
            </div>
        );
    };
    

    return (
        <div className='h-full'>
            <Sidebar />
            <Logo />
            <div className='flex w-11/12 mx-auto gap-4 p-6'>

                <div className='w-4/5 ml-5'>

                    <div className='flex flex-row gap-2'>
                        <h2 className='text-xl mb-4'>Dashed Line Chart</h2>
                        {legend()}
                        
                    </div>
                    <div>
                        <p className='text-zinc-400'>Statistics</p>
                    </div>
                    <div className='w-full mx-auto mt-8'>
                        <Line data={data} options={options} />
                    </div>
                    
                </div>

                <div className='w-1/5 ml-5'>

                </div>
            </div>
        </div>
    );
}

export default Graphs;
