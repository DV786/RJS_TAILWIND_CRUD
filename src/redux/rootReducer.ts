import { combineReducers } from '@reduxjs/toolkit';
import cart from './cart/slice';
import product from './product/slice';

const combinedReducers = combineReducers({
	cart: cart,
	product: product
});

export default combinedReducers;