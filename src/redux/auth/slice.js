import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut, currentUser } from './operations.js';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        loading: false,
        error: null,
        token: null,
        isLoggedIn: false,
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logOut.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logOut.fulfilled, state => {
                state.loading = false,
                    state.user = {
                        name: null,
                        email: null,
                    };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logOut.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(currentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(currentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.data.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(currentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const authReducer = authSlice.reducer;