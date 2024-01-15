import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk(
    'greetings/fetchGreetings',
    async () => {
      try {
        const response = await fetch('/api/greetings/random');
        const data = await response.json();
        return data.greeting;
      } catch (error) {
        throw Error('Error fetching greetings');
      }
    }
);

const initialState = {
    greetings: '',
    isLoding: false,
    error: null
};

const GreetingsSlice = createSlice({
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
                state.isLoding = false;
                state.greetings = action.payload;
            })
            .addCase(fetchGreetings.rejected, (state, action) => {
                state.isLoding = false;
                state.error = action.error.message;
            });
    }
})

export default GreetingsSlice.reducer;