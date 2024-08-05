import React, { useState, useEffect } from 'react';
import Logo from '../../layout/Logo';
import Sidebar from '../../components/Vertical-nav/vertical-nav';
import Modal from './Modal'; // Import the Modal component
import BarGraph from './BarGraph'; // Import the BarGraph component
import AreaChart from './AreaChart';
import HistogramGraph from './HistogramGraph';
import PieChart from './PieChart';
import DashedLineChart from './DashedLineGraph'; // Import the DashedLineChart component
import axios from 'axios';

const generateUniqueColors = (numColors) => {
    const colors = [];
    while (colors.length < numColors) {
        const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        if (!colors.includes(color)) {
            colors.push(color);
        }
    }
    return colors;
};

function Graphs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null); 
    const [modalGraphType, setModalGraphType] = useState(''); // New state to keep track of graph type
    const [data, setData] = useState({ labels: [], datasets: [], colors: [], keywords: [] });

    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
            try {
                const startDate = '2024-01-01';
                const endDate = new Date().toISOString().split('T')[0];
                const keywords = ['international', 'airports', 'islamabad', 'national', 'karachi'];

                const dateString = JSON.stringify({
                    startDate,
                    endDate,
                });

                const response = await axios.post(
                    'http://54.81.234.19:5000/plotSentiment',
                    JSON.stringify({
                        keywords,
                        date: dateString,
                    }),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },
                    }
                );

                const plotData = response.data.plotData;

                // Extract unique dates from all data points
                const allDates = plotData.flatMap(series => series.x);
                const uniqueDates = Array.from(new Set(allDates)).sort();
                const uniqueDates2 = uniqueDates.map(dateString => {
                    const date = new Date(dateString);
                    const day = date.getDate();
                    const month = date.toLocaleString('default', { month: 'long' });
                    return `${day} ${month}`;
                });

                // Generate unique colors
                const colors = generateUniqueColors(plotData.length);

                // Build datasets
                const newDatasets = plotData.map((series, index) => ({
                    id: series.name, // Unique identifier for each dataset
                    label: series.name,
                    data: uniqueDates.map(date => {
                        const dataIndex = series.x.indexOf(date);
                        return dataIndex !== -1 ? series.y[dataIndex] : null;
                    }),
                    borderColor: colors[index], // Assign unique color to each dataset
                    backgroundColor: colors[index], // Optional background color with opacity
                    borderDash: [5, 5],
                    fill: false,
                }));

                setData({ labels: uniqueDates2, datasets: newDatasets, colors, keywords });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleRemoveDataset = (datasetId) => {
        setData((prevData) => ({
            ...prevData,
            datasets: prevData.datasets.filter((dataset) => dataset.id !== datasetId),
        }));
    };

    return (
        <div className='h-full'>
            <Sidebar />
            <Logo />
            <div className='flex w-11/12 mx-auto gap-4 p-6'>
                <DashedLineChart data={data} setData={setData} handleRemoveDataset={handleRemoveDataset} />

                <div className='w-1/5 ml-5'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl mb-4 font-semibold'>Other options</h2>
                        <div className='flex flex-col'>
                            <button
                                className='border-2 border-white shadow-bottom-left-right bg-white-200 p-4 text-left text-xl rounded-lg mb-5'
                                onClick={() => {
                                    setModalContent(<BarGraph chartData={data} />);
                                    setModalGraphType('bar'); // Set graph type
                                    setIsModalOpen(true);
                                }}
                            >
                                Bar Chart
                            </button>
                            <button
                                className='border-2 border-white shadow-bottom-left-right bg-white-200 p-4 text-left text-xl rounded-lg mb-5'
                                onClick={() => {
                                    setModalContent(<PieChart chartData={data} />);
                                    setModalGraphType('pie'); // Set graph type
                                    setIsModalOpen(true);
                                }}
                            >
                                Pie Chart
                            </button>
                            <button
                                className='border-2 border-white shadow-bottom-left-right bg-white-200 p-4 text-left text-xl rounded-lg mb-5'
                                onClick={() => {
                                    setModalContent(<HistogramGraph chartData={data} />);
                                    setModalGraphType('histogram'); // Set graph type
                                    setIsModalOpen(true);
                                }}
                            >
                                Histogram Chart
                            </button>
                        </div>
                    </div>
                    
                </div>
                
            </div>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} graphType={modalGraphType}>
                {modalContent}
            </Modal>
        </div>
    );
}

export default Graphs;
