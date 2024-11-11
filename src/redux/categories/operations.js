import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';

export const categoriesList = createAsyncThunk('categoriesList', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/words/categories');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});
