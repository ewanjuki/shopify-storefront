import { createSlice } from "@reduxjs/toolkit";

const shop = JSON.parse(localStorage.getItem("shop"));

const initialState = {
  shop: shop ? shop : null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    connect(state, action) {
      const shop = {
        name: action.payload.name,
        domain: action.payload.domain,
        token: action.payload.token,
      };

      state.shop = shop;

      localStorage.setItem("shop", JSON.stringify(shop));
    },

    disconnect(state) {      
      state.shop = null;
      localStorage.removeItem("shop");      
    },
  },
});

export const shopActions = shopSlice.actions;
export default shopSlice;
