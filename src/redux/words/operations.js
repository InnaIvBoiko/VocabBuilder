import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://vocab-builder-backend.p.goit.global/api';

export const createNewWord = createAsyncThunk('createNewWord', async (newWord, thunkAPI) => {
    try {
        const response = await axios.post('/words/create', newWord);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});

export const addNewWord = createAsyncThunk('addNewWord', async (id, thunkAPI) => {
    try {
        const response = await axios.post('/words/add/:id', id);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});

export const editNewWord = createAsyncThunk('editNewWord', async (id, thunkAPI) => {
    try {
        const response = await axios.patch('/words/edit/:id', id);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});

export const allWords = createAsyncThunk('allWords', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/words/all');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});



export const deleteContact = createAsyncThunk('deleteContact', async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});