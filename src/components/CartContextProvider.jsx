import React, { useReducer } from 'react';
import CartContext from './CartContext';
import { cartList } from './CartList';
import { reducer } from './CartReducer';


const initialState = {
    dataList: cartList,
    totalAmount: 0,
    totalItem: cartList.length
}


const CartContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // to increment the quantity of the same item in cart
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        })
    }


    // to decrement the quantity of the same item in cart
    const decrement = (id) => {
        return dispatch({
            type: "DERCEMENT",
            payload: id,
        })
    }


    // to delete the individual item from cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })
    }
    
    return (
        <>
            <CartContext.Provider value={{ ...state, increment, decrement, removeItem }}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;