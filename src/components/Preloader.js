import React, { useState, useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';

const Preloader = ({ images, children }) => {
    const [loading, setLoading] = useState(true);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        const handleImageLoad = () => {
            setLoadedCount((prevCount) => prevCount + 1);
        };

        const imageElements = images.map((src) => {
            const img = new Image();
            img.src = src;
            img.onload = handleImageLoad;
            return img;
        });

        return () => {
            imageElements.forEach((img) => {
                img.onload = null;
            });
        };
    }, [images]);

    useEffect(() => {
        if (loadedCount === images.length) {
            setLoading(false);
        }
    }, [loadedCount, images.length]);

    if (loading) {
        return <div className='h-screen flex items-center justify-center text-3xl'>
            <PropagateLoader color='#000' />
        </div>;
    }

    return <>{children}</>;
};

export default Preloader;