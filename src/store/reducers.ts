// src/app/reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './feature/counter/counterSlice'; // Import your slice reducers

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other slice reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
