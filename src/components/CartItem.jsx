import React, { useContext } from 'react';
import './CartItem.css';
import CartContext from './CartContext';


const CartItem = ({ id, title, description, price, img, quantity }) => {

    const { increment, decrement, removeItem } = useContext(CartContext)




    // const [count, setCount] = useState(0)
    // if (count >= 0) {
    //     var Increment = () => {
    //         return setCount(count + 1);
    //     };
    //     var Decrement = () => {
    //         return setCount(count - 1);
    //     };
    // }else {
    //     return setCount(0)
    // }


    return (
        <>
            <div className="cartItem">
                <div className="imgCntnr">
                    <img src={img} alt="img1" />
                </div>
                <div className="itemdataCntnr">
                    <div className="itemTitleCntnr">
                        <a href={title}>
                            <span>{title}</span>
                        </a>
                        <div><span className="description">{description}</span></div>
                        <div className="quantity-Incrmnt-Dcrmnt-n-removeCntnr">
                            <div className="plus-minusCntnr">
                                <button className="quantity-Dcrmnt" onClick={() => decrement(id)} >-</button>
                                <span>{quantity}</span>
                                {/* <input type="text" placeholder='1' /> */}
                                <button className="quantity-Incrmnt" onClick={() => increment(id)} >+</button>
                            </div>
                            <button className='removebtn' onClick={() => removeItem(id)}>REMOVE</button>
                        </div>
                    </div>
                    <div className="itemPrice">
                        <span>{price}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem;