import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: { shop: null },
  reducers: {
    connect(state, action) {
      state.shop = {
        name: action.payload.name,
        domain: action.payload.domain,
        token: action.payload.token,
      };
    },

    disconnect(state) {
      state.shop = null;
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice;
