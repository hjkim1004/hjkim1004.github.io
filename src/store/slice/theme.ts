import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const ThemeType = {
    LIGHT: 'light', DARK: 'dark'
}
const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: document.body.dataset.theme || 'light'
    },
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            switch (action.payload.toLowerCase()) {
                case ThemeType.LIGHT:
                    state.value = ThemeType.LIGHT
                    document.body.dataset.theme = ThemeType.LIGHT
                    break;
                case ThemeType.DARK:
                    state.value = ThemeType.DARK
                    document.body.dataset.theme = ThemeType.DARK
                    break;
            }
        }
    }
})

export const {changeTheme} = themeSlice.actions;
export default themeSlice;