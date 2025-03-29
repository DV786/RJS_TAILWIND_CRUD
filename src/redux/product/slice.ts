import { createSlice } from '@reduxjs/toolkit';
import { IProductState } from '../../types';
import { fetchProductsAction } from '.';

const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProductsAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(fetchProductsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    builder.addCase(fetchProductsAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const fetchAccessToken = (state: { auth: { token: string } }) => state.auth.token;
export default authSlice.reducer;