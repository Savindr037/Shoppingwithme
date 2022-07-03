export const reducer = (state, action) => {
    if (action.type === "ADDTO_CART"){
        return {
            ...state,
            cartItem: state.listItem.map((curItem) => {
                const list = [];
                if (curItem.id === action.payload) {
                    return list.unshift(curItem);
                }
                return list
            })
        }
    }
    return state;
}

