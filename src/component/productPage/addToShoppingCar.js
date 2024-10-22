import React, { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../productContext'; 

export default function AddToShoppingCar({product}) {

  const { productList, addProduct, removeProduct } = useContext(ProductContext); 
  const [btnStatus, setBtnStatus] = useState(false);


  
  useEffect(() => {

    const isProductInCart = productList.some((item) => item.Id === product.Id); 
    
    setBtnStatus(isProductInCart); 
  }, [productList, product]);

  const hanleClick = () => {
    if(!btnStatus){
      addProduct(product);
    }else{
      
      removeProduct(product.Id);
      
    }
  }

  return (
    <>
      {/* <button type="button" onClick={() => {setShoppingBtnStatus(!shoppingBtnStatus)}} className="btn btn-outline-info ms-4">{shoppingBtnStatus ? "Add to shopping car" : "cancel order"} </button> */}
      <button type="button" onClick={hanleClick} className="btn btn-outline-info ms-4">{!btnStatus ? "Add to shopping car" : "cancel order"} </button>

    </>
  )
}
