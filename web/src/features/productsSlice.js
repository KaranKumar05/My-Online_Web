import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import products from "../../../products.mjs";


const baseUrl = 'http://localhost:5000'
const initialState = {
    items: [],
    status: null,
    error: null

}

export const productsFetch = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await axios.get(`${baseUrl}/products`);
        return response?.data;
    })

const productSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {},
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = "success"
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = "rejected"
        },

    }
})

export default productSlice.reducer;