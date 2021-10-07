import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { httpUpdate: { status: "", error: null } },
  reducers: {
    setHttpUpdate(state, action) {
      state.httpUpdate = {
        status: action.payload.status,
        error: action.payload.error,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
