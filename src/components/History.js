import React, { useState } from 'react';
import Logo from '../layout/Logo';
import Sidebar from '../components/Vertical-nav/vertical-nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faFileExport, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';

const initialData = [
    { id: 1, date: '07 June 2024', source: 'Dawn', region: 'Punjab', keywords: 'Police, race' },
    { id: 2, date: '10 May 2024', source: 'Dawn', region: 'Hyderabad', keywords: 'Sugar, salt' },
    { id: 3, date: '15 June 2024', source: 'Express', region: 'Karachi', keywords: 'Water, electricity' },
    { id: 4, date: '20 June 2024', source: 'Dawn', region: 'Lahore', keywords: 'Traffic, accidents' },
    { id: 5, date: '25 June 2024', source: 'Daily News', region: 'Islamabad', keywords: 'Politics, economy' },
    { id: 6, date: '30 June 2024', source: 'Daily News', region: 'Quetta', keywords: 'Education, health' },
    { id: 7, date: '05 July 2024', source: 'Dawn', region: 'Peshawar', keywords: 'Environment, agriculture' },
    { id: 8, date: '10 July 2024', source: 'Express', region: 'Rawalpindi', keywords: 'Crime, security' },
    { id: 9, date: '15 July 2024', source: 'Daily News', region: 'Faisalabad', keywords: 'Trade, business' },
    { id: 10, date: '20 July 2024', source: 'Dawn', region: 'Multan', keywords: 'Sports, entertainment' },
    { id: 11, date: '25 July 2024', source: 'Express', region: 'Sialkot', keywords: 'Tourism, culture' },
    { id: 12, date: '30 July 2024', source: 'Daily News', region: 'Gujranwala', keywords: 'Healthcare, sanitation' },
    { id: 13, date: '05 August 2024', source: 'Dawn', region: 'Murree', keywords: 'Agriculture, forestry' },
    { id: 14, date: '10 August 2024', source: 'Express', region: 'Chakwal', keywords: 'Energy, resources' },
    { id: 15, date: '15 August 2024', source: 'Daily News', region: 'Jhang', keywords: 'Public transport, infrastructure' }
];

function History() {
    const [data, setData] = useState(initialData);
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const [actionsOpen, setActionsOpen] = useState(null);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [dialogAction, setDialogAction] = useState(null);

    const handleCheckboxChange = (id) => {
        setSelectedRows(prevSelectedRows =>
            prevSelectedRows.includes(id)
                ? prevSelectedRows.filter(rowId => rowId !== id)
                : [...prevSelectedRows, id]
        );
    };

    const handleExport = () => {
        if (selectedRows.length === 0) {
            alert('Please select at least one row to export.');
            return;
        }
        setDialogAction('export');
        setShowConfirmDialog(true);
    };

    const handleDelete = () => {
        if (selectedRows.length === 0) {
            alert('Please select at least one row to delete.');
            return;
        }
        setDialogAction('delete');
        setShowConfirmDialog(true);
    };

    const confirmAction = () => {
        if (dialogAction === 'delete') {
            setData(prevData => prevData.filter(row => !selectedRows.includes(row.id)));
            setSelectedRows([]); // Clear selected rows after deletion
        } else if (dialogAction === 'export') {
            exportToExcel();
        }
        setShowConfirmDialog(false);
        setDialogAction(null);
    };

    const cancelAction = () => {
        setShowConfirmDialog(false);
        setDialogAction(null);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleActionClick = (id) => {
        setActionsOpen(prev => prev === id ? null : id);
    };

    const handleAction = (action, id) => {
        if (action === 'delete') {
            setSelectedRows([id]);
            setDialogAction('delete');
            setShowConfirmDialog(true);
        } else if (action === 'export') {
            setSelectedRows([id]);
            setDialogAction('export');
            setShowConfirmDialog(true);
        }
        setActionsOpen(null);
    };

    const exportToExcel = () => {
        const selectedData = data.filter(row => selectedRows.includes(row.id));
        const worksheet = XLSX.utils.json_to_sheet(selectedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        // Generate buffer
        XLSX.writeFile(workbook, 'exported_data.xlsx');
    };

    const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    return (
        <div className="flex flex-col w-full h-full">
            <Sidebar />
            <Logo />
            <div className="flex flex-col w-11/12 mx-auto p-6">
                <div className="border-2 border-grey-500 p-4 flex flex-row items-center">
                    <h1 className="text-2xl font-semibold ml-10">History</h1>
                    <div className="ml-auto flex space-x-2">
                        <button onClick={handleDelete} className="border-grey border-2 text-black py-2 px-4 rounded">
                            <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                            Delete
                        </button>
                        <button onClick={handleExport} className="border-grey border-2 text-black py-2 px-4 rounded">
                            <FontAwesomeIcon icon={faFileExport} className="mr-2" />
                            Export
                        </button>
                    </div>
                </div>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-300 flex items-center justify-center text-lg">
                                <input type="checkbox" className="w-7 h-7" disabled />
                            </th>
                            <th className="py-3 px-4 border-b border-gray-300 text-left text-lg">Date</th>
                            <th className="py-3 px-4 border-b border-gray-300 text-left text-lg">Source</th>
                            <th className="py-3 px-4 border-b border-gray-300 text-left text-lg">Region</th>
                            <th className="py-3 px-4 border-b border-gray-300 text-left text-lg">Keywords</th>
                            <th className="py-3 px-4 border-b border-gray-300 text-left text-lg"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map(row => (
                            <tr key={row.id} className="hover:bg-gray-100">
                                <td className="py-4 px-4 border-b border-gray-300 flex items-center justify-center text-lg">
                                    <input
                                        type="checkbox"
                                        className="w-7 h-7"
                                        checked={selectedRows.includes(row.id)}
                                        onChange={() => handleCheckboxChange(row.id)}
                                    />
                                </td>
                                <td className="py-4 px-4 border-b border-gray-300 text-left text-lg">{row.date}</td>
                                <td className="py-4 px-4 border-b border-gray-300 text-left text-lg">{row.source}</td>
                                <td className="py-4 px-4 border-b border-gray-300 text-left text-lg">{row.region}</td>
                                <td className="py-4 px-4 border-b border-gray-300 text-left text-lg">{row.keywords}</td>
                                <td className="py-4 px-4 border-b border-gray-300 text-left text-lg">
                                    <div className="relative inline-block">
                                        <button onClick={() => handleActionClick(row.id)}>
                                            <FontAwesomeIcon icon={faEllipsisV} className="text-lg text-gray-600" />
                                        </button>
                                        {actionsOpen === row.id && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg">
                                                <button
                                                    onClick={() => handleAction('delete', row.id)}
                                                    className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    onClick={() => handleAction('export', row.id)}
                                                    className="block w-full px-4 py-2 text-left text-blue-600 hover:bg-gray-100"
                                                >
                                                    Export
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showConfirmDialog && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-lg">
                            <h2 className="text-lg font-semibold mb-4">
                                {dialogAction === 'delete' ? 'Confirm Deletion' : 'Confirm Export'}
                            </h2>
                            <p className="mb-4">
                                {dialogAction === 'delete' 
                                    ? 'Are you sure you want to delete the selected row?' 
                                    : 'Are you sure you want to export the selected row?'}
                            </p>
                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={confirmAction}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    {dialogAction === 'delete' ? 'Delete' : 'Export'}
                                </button>
                                <button
                                    onClick={cancelAction}
                                    className="bg-gray-300 text-black px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-center mt-4">
                    <nav>
                        <ul className="inline-flex items-center">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i}>
                                    <button
                                        className={`px-3 py-1 border rounded ${currentPage === i + 1 ? 'bg-gray-300' : ''}`}
                                        onClick={() => handlePageChange(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default History;