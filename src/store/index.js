import { configureStore } from "@reduxjs/toolkit";

import shopSlice from "./shop";
import uiSlice from "./ui";

const store = configureStore({
  reducer: { shop: shopSlice.reducer, ui: uiSlice.reducer },
});

export default store;
