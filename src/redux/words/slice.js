import { createSlice } from '@reduxjs/toolkit';
import { fetchAllWords } from './operations.js';

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
            .addCase(fetchAllWords.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllWords.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data.items;
            })
            .addCase(fetchAllWords.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const wordsReducer = wordsSlice.reducer;
