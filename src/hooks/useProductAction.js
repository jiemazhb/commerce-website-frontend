import { useDispatch,useSelector } from "react-redux";
import {useState} from "react";
import {productActions} from '../redux'
  

export default function useProducttActions(){
    const [selectedProduct, setSelectedProduct] = useState(null);

    const dispatch = useDispatch()

    const productState = useSelector((state) => state.products)
    const {productList, status } = productState


    return {
        filterProductsByCategory: () => dispatch(productActions.fetchProductsByCategory()),
        handleProductClick :  (product) =>{setSelectedProduct(product)},
        productList,
        status,
        selectedProduct,
        handleBack:  () => setSelectedProduct(null)
    }
}