import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { httpUpdate: { status: "", error: null, data: null } },
  reducers: {
    setHttpUpdate(state, action) {
      state.httpUpdate = {
        status: action.payload.status,
        error: action.payload.error,
        data: action.payload.data,
      };
    },
    resetHttpUpdate(state) {
      state.httpUpdate = {
        status: "",
        error: null,
        data: null,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
