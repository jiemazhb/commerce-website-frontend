import React, { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    const addProduct = (product) => {
        
        setProductList((prevList) => [...prevList, product]);
      
    };

    const removeProduct = (productId) => {
        setProductList((prevList) => prevList.filter(item => item.Id !== productId));
    };

    return (
        <ProductContext.Provider value={{ productList, addProduct, removeProduct, setProductList }}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };
