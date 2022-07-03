import React, { useContext } from 'react';
import './Cart.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import CartItem from './CartItem';
import CartContext from './CartContext';


const Cart = () => {

    const { dataList } = useContext(CartContext)

    return (
        <>
            <div className="homePageCntnr">
                <div className="headerCntnr">
                    <Header />
                </div>
                <Sidebar />

                <div className="main-ItemCntnr">
                    <div className='cartPage'>
                        <div className="cartItemsCntnr">
                            <div className="cartHeadingCntnr">
                                <h1 className="shoppingCartHeading">Shopping Cart</h1>
                            </div>
                            <div className="cartItems">
                                {
                                    dataList.map((curItem) => {
                                        return <CartItem key={curItem.id} {...curItem} />
                                    })
                                }

                            </div>
                        </div>

                        <div className="proceedToBuyCntnr">
                            <div className="subtotalCntnr">
                                <span>Subtotal (2 items): 456.00</span>
                            </div>
                            <button className='proceedToBuy-btn'>Proceed to Buy</button>
                        </div>
                    </div>
                </div>
                
                <div className="footerCntnr">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Cart;