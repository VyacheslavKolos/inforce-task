import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IProduct} from "../../interfaces";
import {productService} from "../../services";

interface IProductState {
    products: IProduct[],
}

const initialState: IProductState = {
    products: []
}

export const getAllProducts = createAsyncThunk(
    'productSlice/getAllProducts',
    async (_, {dispatch}) => {
        const {data} = await productService.getAll()
        dispatch(setProducts({products: data}))
    }
)

export const createProductThunk = createAsyncThunk<void, { product: IProduct }>(
    'carSlice/createCarThunk',
    async ({product}, {dispatch}) => {
        const {data} = await productService.create(product);
        dispatch(addProduct({product: data}))
    }
)

export const deleteProductThunk = createAsyncThunk<void, { id: number }>(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) => {
        await productService.deleteById(id)
        dispatch(deleteProduct({id}))
        const {data} = await productService.getAll()
        dispatch(setProducts({products: data}))
    }
)

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProducts: ((state, action: PayloadAction<{ products: IProduct[] }>) => {
            state.products = action.payload.products;
        }),
        addProduct: ((state, action: PayloadAction<{ product: IProduct }>) => {
            state.products.push(action.payload.product)
        }),
        deleteProduct: ((state, action) => {
            state.products.filter(product => product.id !== action.payload.id)
        })
    }
})

const productReducer = productSlice.reducer;
export default productReducer;

export const {setProducts,addProduct,deleteProduct} = productSlice.actions;

