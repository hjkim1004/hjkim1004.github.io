import {createSlice} from "@reduxjs/toolkit";

const scrollOffsetSlice = createSlice({
    name: 'offset',
    initialState: {
        value: document.body.offsetTop
    },
    reducers: {
        changeOffset(state, after){
            state.value = after.payload
        }
    }
});

export const {changeOffset} = scrollOffsetSlice.actions;
export default scrollOffsetSlice.reducer;
