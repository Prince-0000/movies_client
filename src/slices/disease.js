import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
  loading: false,
  paramss:[]
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
    setParams(state,action)
    {
      state.paramss=action.payload;
    }
  },
});

export const { setResult, setLoading ,setParams} = diseaseSlice.actions;
export default diseaseSlice.reducer;
