// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterInitialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
