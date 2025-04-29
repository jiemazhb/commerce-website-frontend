import { useDispatch,useSelector } from "react-redux";
import {cartActions} from '../redux'
import {useState} from "react";
  

export default function useCartActions(){
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch()

    const cartState = useSelector((state) => state.cart)
    const {itemsById, totalPrice, totalItems } = cartState

    const items = Object.values(itemsById)

    return {
        handleAddToCart: (product) => {
            dispatch(cartActions.addToCart(product));
            setQuantity(1);
        },
        increase: (product) => { dispatch(cartActions.increaseQuantity(product)) },
        decrease: (product) => { dispatch(cartActions.decreaseQuantity(product)) },
        remove: (product) => {dispatch(cartActions.removeFromCart(product)) },
        totalPrice, 
        totalItems,
        items,
        quantity,
        setProductQuantity: (num) => {setQuantity(num)}
    }
}