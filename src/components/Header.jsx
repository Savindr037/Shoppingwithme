import './Header.css';
import { NavLink } from 'react-router-dom';
import SearchBox from './SearchBox';
import { BsCart4 } from 'react-icons/bs';
import { totalItem_n_Price } from '../service/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


function Header() {

    const cartState = useSelector((state) => state.Reducer);
    const cartList = cartState.cartList;
    const totalItem = cartState.totalItem;

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(totalItem_n_Price());

    }, [cartList])


    return (
        <>
            <header>
                <nav className='navbar'>
                    <NavLink to="/" className='logoCntnr'><span className='logo'>Shopping</span><span className='logo-withme'>with me</span></NavLink>
                    {/* <div className="searchBox-n-navMenuCntnr"> */}
                        <SearchBox />
                        <ul>
                            <li className='titleCntnr home-titleCntnr'>
                                <NavLink to="/" className="navMenu">Home</NavLink>
                            </li>
                            <li className='titleCntnr'>
                                <NavLink to="/SignIn" className="navMenu signIn">Sign In</NavLink>
                            </li>
                            <li className='titleCntnr'>
                                <NavLink to="/Cart" className="navMenu cartlogoCntnr">
                                    <span className={totalItem < 10 ? "itemNo_inCart-whnQty_lessthn10" : "itemNo_inCart"}>{totalItem}</span>
                                    <BsCart4 className='cartlogo' /><span className='cartlogoTitle'>Cart</span>
                                </NavLink>
                            </li>
                        </ul>
                    {/* </div> */}
                </nav>
            </header>
        </>
    )
}

export default Header
