import {configureStore, createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: localStorage.getItem('theme') || document.body.dataset.theme,
    },
    reducers: {
        darkMode(state) {
            state.value = 'dark'
            document.body.dataset.theme = state.value
            localStorage.setItem('theme', state.value)
        },
        lightMode(state) {
            state.value = 'light'
            document.body.dataset.theme = state.value
            localStorage.setItem('theme', state.value)
        }
    }
});

export const { darkMode, lightMode } = themeSlice.actions;
export default configureStore({
    reducer: {
    }
})