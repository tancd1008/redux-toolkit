import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { add, list } from "../../api/product";

export const getProducts = createAsyncThunk('product/getProducts', async () => {
    const {data} = await list();
    return data;
    
})
export const addProduct = createAsyncThunk('product/addProducts', async (product) => {
    const {data} = await add(product);
    return data;
    
})
const productSlide = createSlice({
    name:"product", 
    initialState: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.value = action.payload
        });
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.value.push(action.payload)
        });
    }
})
export default productSlide.reducer