import { createSlice } from '@reduxjs/toolkit';
import { allWords } from './operations.js';

const wordsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const wordsSlice = createSlice({
    name: 'words',
    initialState: wordsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allWords.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(allWords.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.results;
            })
            .addCase(allWords.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const wordsReducer = wordsSlice.reducer;
