import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState: {
    token: localStorage.getItem("token") ?? null,
    userData: null,
  },

  reducers: {
    setUserDataAction(state, { payload }) {
      state.userData = payload;
    },

    setTokenAction(state, { payload }) {
      state.token = payload;
    },
  },
});

export default userDataSlice.reducer;

export const { setUserDataAction, setTokenAction } = userDataSlice.actions;
