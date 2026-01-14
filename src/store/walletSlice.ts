import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Transaction = {
  id: string;
  type: "DEPOSIT" | "INVEST";
  amount: number;
  date: string;
};

export type WalletState = {
  available: number;
  invested: number;
  transactions: Transaction[];
  error: string | null;
};

const initialState: WalletState = {
  available: 8500,
  invested: 4500,
  transactions: [],
  error: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<number>) => {
      state.available += action.payload;
      state.transactions.unshift({
        id: new Date().toISOString(),
        type: "DEPOSIT",
        amount: action.payload,
        date: new Date().toString(),
      });
    },
    invest: (state, action: PayloadAction<number>) => {
      if (state.available < action.payload) {
        state.error = "Insufficient balance";
        return;
      }
      state.available -= action.payload;
      state.invested += action.payload;
      state.transactions.unshift({
        id: new Date().toISOString(),
        type: "INVEST",
        amount: action.payload,
        date: new Date().toString(),
      });
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetReducer: () => initialState,
  },
});

export const { deposit, invest, clearError, resetReducer } =
  walletSlice.actions;
export default walletSlice.reducer;
