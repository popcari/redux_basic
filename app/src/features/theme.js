import { createSlice } from "@reduxjs/toolkit"; // redux/toolkit

const initialValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: initialValue,
  },
  reducers: {
    // action
    /**
     * login
     */
    changeColor: (state, action) => {
      console.log(action);

      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;
