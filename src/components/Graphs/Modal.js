import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children, graphType }) => {
    const modalRef = useRef(null);

    // Handle clicks outside the modal content
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const modalClass =
        graphType === 'pie'
            ? 'bg-white p-6 rounded-lg relative w-4/5 max-w-3xl'
            : 'bg-white p-6 rounded-lg relative w-4/5 max-w-6xl';

    return ReactDOM.createPortal(
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div ref={modalRef} className={modalClass}>
                <button
                    className='absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700'
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;
