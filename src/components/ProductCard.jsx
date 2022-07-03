import React, { useContext } from 'react';
import './ProductCard.css';
import HomeContext from './HomeContext';



const ProductCard = ({ id, title, description, price, img, quantity }) => {

    const { cartItem } = useContext(HomeContext);
    const { addtoCart } = useContext(HomeContext);

    console.log(cartItem);

    return (
        <>
            <div className="product">
                <div className="imgCntnr">
                    <img src={img} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="add-to-Cart-n-buy-NowCntnr">
                    <button className="addToCart-btn" onClick={() => addtoCart(id)}>Add to Cart</button>
                    <button className="buyNow-btn">Boy now</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard;