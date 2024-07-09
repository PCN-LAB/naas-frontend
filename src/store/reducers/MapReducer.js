import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyWordsSearch: []
}

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        pushKeyWordsSearch(state, action) {
            state.keyWordsSearch.push(action.payload);
            // log the state
            // console.log(JSON.stringify(state.keyWordsSearch, null, 2));
        }
    }
});

export const { pushKeyWordsSearch } = mapSlice.actions;
export default mapSlice.reducer;