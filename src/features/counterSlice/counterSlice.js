import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 0) {
        return;
      } else {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      let result = state.value - action.payload;

      if (result <= 0) {
        return initialState;
      } else {
        state.value -= action.payload;
      }
    },
    inputNumber: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  inputNumber,
} = counterSlice.actions;
export default counterSlice.reducer;
