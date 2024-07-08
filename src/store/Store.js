import { configureStore } from '@reduxjs/toolkit';
import MapReducer from './reducers/MapReducer';

const store = configureStore({
    reducer: {
        map: MapReducer
    }
});

export default store;