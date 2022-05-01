import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllProducts} from "../../store";
import {Product} from "../Product/Product";

const ProductsList:FC = () => {

    const dispatch = useAppDispatch();

    const {products} = useAppSelector(state => state.productReducer)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    
    return (
        <div>
            {products.map(product=><Product key={product.id} product={product}/>)}
        </div>
    );
};

export {ProductsList};
