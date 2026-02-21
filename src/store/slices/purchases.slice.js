import { createSlice } from "@reduxjs/toolkit";

const purchasesSlice = createSlice({
  name: "purchasesSlice",
  initialState: {
    purchases: [],
  },

  reducers: {
    setPurchasesAction(state, { payload }) {
      state.purchases = payload;
    },
  },
});

export default purchasesSlice.reducer;

export const { setPurchasesAction } = purchasesSlice.actions;
