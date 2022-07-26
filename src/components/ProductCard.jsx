import './ProductCard.css';
import { NavLink } from 'react-router-dom';

import { addToCart } from '../service/actions/index';
import { useDispatch } from "react-redux";



const ProductCard = ({ product }) => {

    const dispatch = useDispatch()


    return (
        <>
            <div className="product">
                <div className="imgCntnr">
                    <img src={product.img} alt="" />
                </div>
                <div className="title-n-priceCntnr">
                    <h4> <NavLink to="/ProductDetailPage" className="productTitle" onClick={true}>{product.title}</NavLink></h4>
                    <span className='price'>₹ {product.price}.0</span>
                </div>
                <div className="add-to-Cart-n-buyNowCntnr">
                    <button className="addToCart-btn" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    <button className="buyNow-btn">Buy now</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard
