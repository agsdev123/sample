import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { common } from "../../services/Common";
export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  try {
    const response = await common.getProducts();
    if (response.status === 200) {
   
      return response?.data.data;
    }
  } catch (error) {
    return error;
  }
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productList = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
