import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
  loading: false,
};

const diseaseSlice = createSlice({
  name: "disease",
  initialState: initialState,
  reducers: {
    setResult(state, action) {
      state.result = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setResult, setLoading } = diseaseSlice.actions;
export default diseaseSlice.reducer;
