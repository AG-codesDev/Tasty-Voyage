import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: "",
    password: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.userName;
      state.password = action.payload.password;
      //   console.log(action);
    },
  },
});

export const { addUser } = loginSlice.actions;
export default loginSlice.reducer;
