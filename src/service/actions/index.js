// import { useEffect } from "react"

export const addToCart =(product)=>{
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

// to increment the quantity of the same item in cart
export const increment = (id) => {
    return {
        type: "INCREMENT",
        payload: id,
    }
}

// to decrement the quantity of the same item in cart
export const decrement = (id) => {
    return {
        type: "DERCEMENT",
        payload: id,
    }
}

// to delete the individual item from cart
export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id,
    }
}

// we will use useEffect to get total quantity and amount of items in cart
export const totalItem_n_Price = (id) => {
    return {
        type: "TOTAL_ITEM_PRICE",
        payload: id
    }
}




// useEffect(() => {
//     dispatch({ type: 'TOTAL_ITEM' });
// }, [state.dataList])