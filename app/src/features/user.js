import { createSlice } from "@reduxjs/toolkit"; // redux/toolkit

const initialValue = {
  name: "",
  age: 0,
  email: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialValue,
  },
  reducers: {
    // action
    /**
     * login
     */
    login: (state, action) => {
      state.value = action.payload;
    },

    /**
     * logout (reset)
     */
    logout: (state) => {
      state.value = {
        name: "",
        age: 0,
        email: "",
      };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
