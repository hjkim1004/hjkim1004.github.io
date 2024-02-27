import {configureStore} from '@reduxjs/toolkit'
import scrollOffsetSlice from "@Store/slice/offset";

export const store = configureStore({
    reducer: {
        offset: scrollOffsetSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch