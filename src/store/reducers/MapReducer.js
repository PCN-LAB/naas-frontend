import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyWordsSearch: [],
    newsSource: null,
    regionSelected: null,
    focusTime: [],
    publicationTime: []
};

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        pushKeyWordsSearch(state, action) {
            state.keyWordsSearch.push(action.payload);
        },
        deleteKeyWord(state, action) {
            state.keyWordsSearch = state.keyWordsSearch.filter(
                keyword => keyword !== action.payload
            );
        },
        setNewsSource(state, action) {
            state.newsSource = action.payload;
        },
        setRegionSelected(state, action) {
            state.regionSelected = action.payload;
        },
        setFocusTimeRedux(state, action) {
            state.focusTime = action.payload;
        },
        setPublicationTimeRedux(state, action) {
            state.publicationTime = action.payload;
        }
    }
});

export const { pushKeyWordsSearch, setNewsSource, setRegionSelected, setFocusTimeRedux, setPublicationTimeRedux, deleteKeyWord } = mapSlice.actions;
export default mapSlice.reducer;