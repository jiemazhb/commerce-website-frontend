import React, { useEffect, useState, useContext } from 'react';
import AddToShoppingCar from './addToShoppingCar';
import { ProductContext } from '../productContext'; 

export default function ProductDetails({ product, onBack}) {
    const { productList } = useContext(ProductContext); 
    return (
        <>

            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.categoryName}</p>
            <button className='btn btn-outline-primary' onClick={onBack}>Back to Products</button>
            <AddToShoppingCar product = {product} />

        </>
    );
}
