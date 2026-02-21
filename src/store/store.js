// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import userDataSlice from './slices/userData.slice.js';
import purchasesSlice from './slices/purchases.slice.js';

const store = configureStore({
  reducer: {
    userDataSlice,
    purchasesSlice,
  }
});

export default store;