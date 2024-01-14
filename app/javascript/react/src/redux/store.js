import { configureStore } from '@reduxjs/toolkit';
import GreetingsReducer from './greetings/greetingsSlice';

const store = configureStore({
    reducer: {
        greetings: GreetingsReducer
    },
});

export default store;