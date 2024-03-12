import {createSlice} from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        main: true,
    },
    reducers: {
        mainLoaded: (state) => {
            state.main = false;
        }
    }
});
export const {mainLoaded} = loadingSlice.actions;
export default loadingSlice;