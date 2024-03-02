import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const scrollOffsetSlice = createSlice({
    name: 'offset',
    initialState: {
        value: document.body.offsetTop
    },
    reducers: {
        changeOffset(state, action: PayloadAction<number>){
            state.value = action.payload
        }
    }
});

export const {changeOffset} = scrollOffsetSlice.actions;
export default scrollOffsetSlice;
