import React, { useReducer } from "react";
import HomeContext from "./HomeContext";
import { productList } from './ProductList';
import { reducer } from "./HomeReducer";

export const cartList = [
    // {
    //     id: 1,
    //     title: "savindr"
    // }
];

const HomeContextProvider = (props) => {

    const initialState = {
        listItem: productList,
        cartItem: [],
        totalAmount: 0,
        totalItem: 0
    }



    const [state, dispatch] = useReducer(reducer, initialState);


    // to delete the individual item from cart
    const addtoCart = (id) => {
        return dispatch({
            type: "ADDTO_CART",
            payload: id,
        })
    }


    return (
        <>
            <HomeContext.Provider value={{ ...state, addtoCart }}>
                {props.children}
            </HomeContext.Provider>
        </>)
}

export default HomeContextProvider;