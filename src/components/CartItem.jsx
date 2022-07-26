import './CartItem.css';

import { increment } from '../service/actions/index';
import { decrement } from '../service/actions/index';
import { removeItem } from '../service/actions/index';
import { useDispatch } from "react-redux";



const CartItem = ({ id, title, description, price, img, quantity }) => {

    const dispatch = useDispatch()


    return (
        <>
            <div className="cartItem">
                <div className="imgCntnr">
                    <img src={img} alt="img1" />
                </div>
                <div className="itemdataCntnr">
                    <div className="itemTitle-n-priceCntnr">
                        <a href="">
                            <span>{title}</span>
                        </a>
                        <div><span className="description">{description}</span></div>
                        <div className="itemPrice">
                            <span>₹{price}.0</span>
                        </div>
                    </div>
                    <div className="quantity-Incrmnt-Dcrmnt-n-removeCntnr">
                        <div className="plus-minusCntnr">
                            <button className="minus" onClick={() => dispatch(decrement(id))} >−</button>
                            <span className='quantity'>{quantity}</span>
                            <button className="plus" onClick={() => dispatch(increment(id))} >+</button>
                        </div>
                        <button className='removebtn' onClick={() => dispatch(removeItem(id))}>REMOVE</button>
                    </div>

                </div>
            </div>
            <div className='item-divider-line' ></div>
        </>
    )
}

export default CartItem;