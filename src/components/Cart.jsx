import { NavLink } from 'react-router-dom';
import './Cart.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import CartItem from './CartItem';

import { totalItem_n_Price } from '../service/actions/index';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';


const Cart = () => {

    const cartState = useSelector((state) => state.Reducer);
    const cartList = cartState.cartList;
    const totalItem = cartState.totalItem;
    const totalAmount = cartState.totalAmount;

    // console.log("cartState", cartState)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(totalItem_n_Price());

    }, [ cartList ])

 
    return (
        <>
            {/* <div className="over-all-PageCntnr"> */}
                <div className="headerCntnr">
                    <Header />
                </div>
                <Sidebar />

                <div className="main-contentCntnr">
                    <div className='cartPage'>

                        <div className="cart-heading-n-ItemsCntnr" >
                            <div className="cartHeadingCntnr">
                                {cartList.length === 0 ? <h1 className="shoppingCartHeading">Your Cart is empty</h1> : <h1 className="shoppingCartHeading">Shopping Cart</h1>}

                                <div className="item-in-urCart-n-PriceTitleCntnr">
                                    <span>{totalItem} items in your cart</span>
                                    {cartList.length !== 0 ? <span className='price-col'>Price</span> : null}

                                </div>
                            </div>
                            {cartList.length === 0 ? <div className="cntnu-shpngCntnr"><NavLink to="/" className="cntnu-shpng">Continue shopping</NavLink></div> : null}
                            <div className="cartItemsCntnr">
                                {
                                    cartList.map((curItem) => {
                                        return <CartItem key={curItem.id} {...curItem} />
                                    })
                                }

                            </div>
                        </div>

                        <div className="proceedToBuyCntnr">
                            <div className="subtotalCntnr">
                                <span>Subtotal {totalItem} items: ₹<span className="subtotal-price">{totalAmount}.0</span></span>
                            </div>
                            <button className='proceedToBuy-btn' onClick={() => alert("further process is under development")}>Proceed to Buy</button>
                        </div>
                    </div>
                </div>

                <div className="footerCntnr">
                    <Footer />
                </div>
            {/* </div> */}
        </>
    )
}

export default Cart
