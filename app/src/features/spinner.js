import { createSlice } from "@reduxjs/toolkit"; // redux/toolkit

const initialValue = false;

export const spinnerSlice = createSlice({
  name: "spinner",
  initialState: {
    value: initialValue,
  },
  reducers: {
    // action
    /**
     * login
     */
    toggleSpinner: (state, action) => {
      console.log("payload: ", action.payload);

      state.value = action.payload;
    },
  },
});

export const { toggleSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;
