import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice"

const appStore = configureStore({
    reducer: cartReducer
});

export default appStore;