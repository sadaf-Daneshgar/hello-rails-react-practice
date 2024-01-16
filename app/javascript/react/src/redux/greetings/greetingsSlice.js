import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk(
    'greetings/fetchGreetings',
    async () => {
        const response = await fetch('/api/greetings/random');
        if (!response.ok) {
            throw new Error('Failed to fetch.');
        }
        const data = await response.json();
        return data.greeting;
    },
);

const initialState = {
    greeting: '',
    isLoding: false,
    error: null
};

const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGreetings.pending, (state) => {
                state.isLoding = true;
                state.error = null;
            })
            .addCase(fetchGreetings.fulfilled, (state, action) => {
                state.greeting = action.payload;
                state.isLoding = false;
                state.error = null;
            })
            .addCase(fetchGreetings.rejected, (state, action) => {
                state.isLoding = false;
                state.error = action.error.message;
            });
    }
})

export default greetingsSlice.reducer;