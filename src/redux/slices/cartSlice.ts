import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart } from "@/interfaces/cart.interface";

type CartProps = {
  cart: Cart[] ;
  showCart: boolean;
};


const initialState: CartProps = {
  cart: [],
  showCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getItems: (state, action: PayloadAction<Cart[]>) => {
      state.cart = action.payload
    },
    openCart: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
    closeCart: (state, action: PayloadAction<boolean>) => {
      state.showCart = action.payload;
    },
  },
});

export const { closeCart, openCart, getItems} = cartSlice.actions;
export default cartSlice.reducer;
