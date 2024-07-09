import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyWordsSearch: [],
    newsSource: null,
    regionSelected: null
}

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        pushKeyWordsSearch(state, action) {
            state.keyWordsSearch.push(action.payload);
            // log the state
            // console.log(JSON.stringify(state.keyWordsSearch, null, 2));
        },
        setNewsSource(state, action) {
            state.newsSource = action.payload;
        },
        setRegionSelected(state, action) {
            state.regionSelected = action.payload;
        }
    }
});

export const { pushKeyWordsSearch } = mapSlice.actions;
export const { setNewsSource } = mapSlice.actions;
export const { setRegionSelected } = mapSlice.actions;
export default mapSlice.reducer;