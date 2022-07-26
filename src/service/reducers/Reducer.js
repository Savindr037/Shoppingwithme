import { HomeProductList } from '../../components/HomeProductList';
import { CartList } from '../../components/CartList';


const initialState = {
    ProductList: HomeProductList,
    cartList: CartList,
    totalItem: 0,
    totalAmount: 0,
    users: null,
}

const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TO_CART":

            // to get the product from the from the ProductList array
            // const product = state.ProductList.find((curItem) => curItem.id === action.payload.id);

            // to check product is already in the cartList or not
            const if_product_inCart = state.cartList.find((curItem) =>
                curItem.id === action.payload.id ? true : false
            );

            return {
                ...state,
                // cartList: [...state.cartList, action.payload],
                cartList: if_product_inCart ? state.cartList.map((curItem) => (curItem.id === action.payload.id) ? { ...curItem, quantity: curItem.quantity + 1 } : curItem)
                    : [...state.cartList, action.payload],
            }

        // to remove the individual item from cart    
        case "REMOVE_ITEM":
            return {
                ...state,
                cartList: state.cartList.filter((curItem) => {
                    return curItem.id !== action.payload;
                })
            }

        // to increment the quantity of the same item in cart
        case "INCREMENT":
            return {
                ...state,
                cartList: state.cartList.map((curItem) => {
                    if (curItem.id === action.payload) {
                        return { ...curItem, quantity: curItem.quantity + 1 }
                    }
                    return curItem;
                })
            }

        // to decrement the quantity of the same item in cart
        case "DERCEMENT":
            return {
                ...state,
                cartList: state.cartList.map((curItem) => {
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

        // to get total Qty and Price in cart
        case 'TOTAL_ITEM_PRICE':

            let { totalQuantity, totalPrice } = state.cartList.reduce((accum, curVal) => {
                let { quantity, price } = curVal;
                accum.totalQuantity += quantity;

                let updatedTotalPrice = price * quantity;
                accum.totalPrice += updatedTotalPrice;

                return accum;
            }, { totalQuantity: 0, totalPrice: 0 });
            return {...state, totalItem: totalQuantity, totalAmount: totalPrice} // or this bellow code

            // state.totalItem = totalQuantity;
            // state.totalAmount = totalPrice;
        

        default:
            return state
    }

    // return state
}

export default Reducer;