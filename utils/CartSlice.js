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
                    removeitem: (state , action) => {
                        const id=action.payload;
                        state.items=state.items.filter(item=> item.id !=id);
                    },
                    clearCart: (state) => {
                    state.items = [];
                    },
                },
         });

export const { addItem, removeitem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
