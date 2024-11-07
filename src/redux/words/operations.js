import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';

export const fetchAllWords = createAsyncThunk('fetchAllWords', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/words/all');
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
