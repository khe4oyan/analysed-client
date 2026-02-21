import { createSlice } from "@reduxjs/toolkit";

const purchasesSlice = createSlice({
  name: "purchasesSlice",
  initialState: {
    purchases: [],
  },

  reducers: {
    addNewPurchaseAction(state, { payload }) {
      state.purchases.push(payload);
    },

    setPurchasesAction(state, { payload }) {
      state.purchases = payload;
    },

    removePurchaseByIdAction(state, { payload }) {
      state.purchases = state.purchases.filter((p) => p.id !== payload);
    },

    changeStatusByIdAction(state, { payload }) {
      const [id, newStatus] = payload;

      for (let i = 0; i < state.purchases.length; ++i) {
        if (state.purchases[i].id === id) {
          state.purchases[i].status = newStatus;
          break;
        }
      }
    },

    editPurchaseByIdAction(state, { payload }) {
      const [id, title, amount] = payload;

      for (let i = 0; i < state.purchases.length; ++i) {
        if (state.purchases[i].id === id) {
          state.purchases[i].title = title;
          state.purchases[i].amount = amount;
          break;
        }
      }
    },
  },
});

export default purchasesSlice.reducer;

export const {
  addNewPurchaseAction,
  setPurchasesAction,
  removePurchaseByIdAction,
  changeStatusByIdAction,
  editPurchaseByIdAction,
} = purchasesSlice.actions;
