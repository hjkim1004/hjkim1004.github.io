import {configureStore} from '@reduxjs/toolkit'
import scrollOffsetSlice from "@Store/slice/offset";
import drawerSlice from "@Store/slice/drawer";
import themeSlice from "@Store/slice/theme";

export const store = configureStore({
    reducer: {
        offset: scrollOffsetSlice.reducer,
        drawer: drawerSlice.reducer,
        theme: themeSlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>