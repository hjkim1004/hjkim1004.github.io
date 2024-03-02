import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export enum DrawerType {
    SIDEBAR
}
const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        sidebarOpen: false
    },
    reducers: {
        openDrawer: (state, action: PayloadAction<DrawerType>) => {
            switch (action.payload) {
                case DrawerType.SIDEBAR:
                    state.sidebarOpen = true;
                    break;
            }
        },
        closeDrawer: (state, action: PayloadAction<DrawerType>) => {
            switch (action.payload) {
                case DrawerType.SIDEBAR:
                    state.sidebarOpen = false;
                    break;
            }
        },
    }
});

export const {openDrawer, closeDrawer} = drawerSlice.actions;
export default drawerSlice;