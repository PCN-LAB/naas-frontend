import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyWordsSearch: []
}

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        setKeyWordsSearch(state, action) {
            state.keyWordsSearch = action.payload;
        }
    }
});

export const { setKeyWordsSearch } = mapSlice.actions;
export default mapSlice.reducer;