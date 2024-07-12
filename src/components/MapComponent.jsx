import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet library
import PAK_adm3 from '../assets/merge.json';

// Import marker icon assets from Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Define custom marker icon
const defaultMarker = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41], // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    shadowSize: [41, 41], // Size of the shadow
});

const MapComponent = () => {
    const regionSelected = useSelector(state => state.map.regionSelected);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const mapRef = useRef(null); // Ref for accessing MapContainer instance

    // Filter out regions with null or incomplete coordinates
    const validFeatures = PAK_adm3.features.filter((feature) => {
        const coordinates = feature.geometry.coordinates;
        return coordinates && coordinates.length > 0 && coordinates[0].length > 0 && coordinates[0][0].length === 2;
    });

    // Function to generate a random color
    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    // Function to handle selection of a sub-sub-region
    const handleSubSubRegionSelect = (selectedName) => {
        const selectedFeature = validFeatures.find(
            (feature) => feature.properties.NAME_3 === selectedName
        );

        if (selectedFeature) {
            const coordinates = selectedFeature.geometry.coordinates[0][0];
            if (coordinates && coordinates.length === 2) { // Ensure correct coordinate format
                // Set selected region with a random color
                const newRegion = {
                    feature: selectedFeature,
                    color: getRandomColor(),
                };
                setSelectedRegion(newRegion); // Set selected region
                setErrorMessage(''); // Clear any previous error messages
            } else {
                setErrorMessage('Coordinates not found or invalid format for the selected region.');
            }
        } else {
            setErrorMessage('Selected region not found.');
        }
    };

    // Style function for GeoJSON layer
    const getRegionStyle = (feature) => {
        return {
            weight: 2,
            opacity: 1,
            fillOpacity: 0.7,
            color: selectedRegion && selectedRegion.feature.properties.NAME_3 === feature.properties.NAME_3
                ? selectedRegion.color
                : 'green',
            fillColor: selectedRegion && selectedRegion.feature.properties.NAME_3 === feature.properties.NAME_3
                ? selectedRegion.color
                : 'transparent',
        };
    };

    // Effect to handle auto selection based on Redux state
    useEffect(() => {
        if (regionSelected) {
            handleSubSubRegionSelect(regionSelected);
        }
    }, [regionSelected]);

    return (
        <div>
            {/* Error message */}
            <div className="relative z-10">
                {errorMessage && <p className='text-red-600 text-center'>{errorMessage}</p>}

                {/* Map Container */}
                <MapContainer ref={mapRef} className='w-full rounded-lg pt-8 p-2' style={{ height: '632px' }} center={[30.3753, 69.3451]} zoom={6}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* GeoJSON layer for regions */}
                    {PAK_adm3 && (
                        <GeoJSON
                            data={PAK_adm3}
                            style={getRegionStyle}
                            onEachFeature={(feature, layer) => {
                                layer.on({
                                    click: () => {
                                        // Do nothing to disable editing on map
                                    },
                                });
                            }}
                        />
                    )}
                    {/* Marker for selected region */}
                    {selectedRegion && (
                        <Marker
                            position={[
                                selectedRegion.feature.geometry.coordinates[0][0][1], // Latitude
                                selectedRegion.feature.geometry.coordinates[0][0][0], // Longitude
                            ]}
                            icon={defaultMarker} // Use custom marker icon
                            eventHandlers={{
                                click: () => {
                                    const bounds = L.geoJSON(selectedRegion.feature).getBounds();
                                    if (mapRef.current) {
                                        mapRef.current.flyToBounds(bounds);
                                    }
                                },
                            }}
                        >
                            <Popup>
                                {selectedRegion.feature.properties.NAME_3}
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapComponent;
