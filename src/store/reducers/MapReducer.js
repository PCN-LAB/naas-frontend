import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keyWordsSearch: [],
    keyWordsOptions: [],
    newsSource: null,
    regionSelected: null,
    focusTime: [],
    publicationTime: [],
    news: []
};

const mapSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        pushKeyWordsSearch(state, action) {
            state.keyWordsSearch.push(action.payload);
        },
        setKeyWordsOptions(state, action) {
            state.keyWordsOptions = action.payload;
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
        },
        setNewsRedux(state, action) {
            state.news = action.payload;
             console.log(state.news);
        }
    }
});

export const { setNewsRedux, pushKeyWordsSearch, setKeyWordsOptions, setNewsSource, setRegionSelected, setFocusTimeRedux, setPublicationTimeRedux, deleteKeyWord } = mapSlice.actions;
export default mapSlice.reducer;