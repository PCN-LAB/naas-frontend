import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaTimes } from 'react-icons/fa';
import { Chart, registerables } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

// Register Chart.js components
Chart.register(...registerables, zoomPlugin);
const options = {
    plugins: {
        legend: {
            display: false,
        },
        zoom: {
            // Zoom and pan options
            zoom: {
                wheel: {
                    enabled: true, // Enable zooming with the mouse wheel
                },
                pinch: {
                    enabled: true, // Enable zooming with pinch gestures
                },
                mode: 'xy', // Allow zooming on both x and y axes
                speed: 0.3, // Zoom speed (default: 0.1)
                limits: {
                    x: {
                        min: 0.98, // Zoom out by 2%
                        max: 1.02, // Zoom in by 2%
                    },
                    y: {
                        min: 0.98, // Zoom out by 2%
                        max: 1.02, // Zoom in by 2%
                    },
                },

            },
            pan: {
                enabled: true, // Enable panning
                mode: 'xy', // Allow panning on both x and y axes
                limits: {
                    x: { min: 0, max: Infinity }, // Allow unlimited panning on x-axis
                    y: { min: -1, max: 1 },
                }
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
const DashedLineChart = ({ data, setData, handleRemoveDataset }) => {
    const legend = () => {
        return (
            <div
                className='flex flex-row gap-8 ml-8 overflow-y-auto'
                style={{ maxHeight: '150px' }} // Adjust the height as needed
            >
                {data.datasets.map((dataset, index) => (
                    <div
                        key={index}
                        className='flex items-center space-x-2 border border-gray-300 rounded-md p-2 cursor-pointer'
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
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveDataset(dataset.id);
                            }}
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
        <div className='w-4/5 ml-5'>
            <div className='flex flex-row gap-2'>
                <h2 className='text-xl mb-4 font-medium'>Dashed Line Chart</h2>
                {legend()}
            </div>
            <div className='flex flex-row justify-between mt-8 mr-10'>
                <p className='text-zinc-400'>Statistics</p>
                <p className="text-zinc-500">Note: You can zoom in and zoom out on the graph</p>
            </div>
            <div className='w-full mx-auto mt-4'>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default DashedLineChart;
