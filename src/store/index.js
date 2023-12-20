// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterInitialState = {
  counter: 0,
  showCounter: false,
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
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authInitialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
