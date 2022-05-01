import React, {FC} from 'react';

import {IProduct} from "../../interfaces";
import {DeleteProduct} from "../DeleteProduct/DeleteProduct";
import './Product.css';

const Product:FC<{ product : IProduct }> = ({product}) => {
    const { id,name,imageUrl}=product;

    return (
        <div className={'product-wrap'}>
            <div className={'product'}>
                <h3>{name}</h3>
                <img src={`${imageUrl}`} alt={`${name}`}/>
                <DeleteProduct id={id}/>
            </div>
        </div>
    );
};

export {Product};
