import { createSlice } from '@reduxjs/toolkit';
import { categoriesList } from './operations.js';

const initialState = {
  categories: [], 
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoriesList.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoriesList.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(categoriesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
