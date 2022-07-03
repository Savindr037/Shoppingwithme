export const reducer = (state, action) => {

    // to remove the individual item from cart
    if (action.type === "REMOVE_ITEM"){
        return {
            ...state,
            dataList: state.dataList.filter((curItem) => {
                return curItem.id !== action.payload;
            })
        }
    }

    // to increment the quantity of the same item in cart
    if (action.type === "INCREMENT") {
        return {
            dataList: state.dataList.map((curItem) => {
                if (curItem.id === action.payload) {
                    return {
                        ...curItem, quantity: curItem.quantity + 1
                    } 
                }
                return curItem;
            })
        }
    }

    // to decrement the quantity of the same item in cart
    if (action.type === "DERCEMENT") {
        return {
            dataList: state.dataList.map((curItem) => {
                if (curItem.id === action.payload) {
                    if (curItem.quantity > 1) {
                        return {
                            ...curItem, quantity: curItem.quantity - 1
                        } 
                    }
                }
                return curItem;
            })
        }
    }


    return state;
}