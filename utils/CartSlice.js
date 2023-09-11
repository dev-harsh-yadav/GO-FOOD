import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
                name: "cart",
                initialState: {
                    items: [],
                },
                reducers: {
                    addItem: (state, action) => {
                    state.items.push(action.payload);
                    },
                    removeitem: (state ) => {
                        state.items.pop();
                    },
                    clearCart: (state) => {
                    state.items = [];
                    },
                },
         });

export const { addItem, removeitem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
