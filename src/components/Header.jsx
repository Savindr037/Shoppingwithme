import React, { useContext } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import CartContext from './CartContext';
// import { IoCartOutline } from 'react-icons/io';


function Header() {
    const { totalItem } = useContext(CartContext);



    return (
        <>
            <header>
                <nav className='navbar'>
                    <a href="/" className='logoCntnr'><span className='logo'>Shopping</span><span className='logo-withme'>with me</span></a>
                    <ul>
                        <li className='header-list'>
                            <NavLink to="/" className="navMenu">Home</NavLink>
                        </li>
                        <li className='header-list'>
                            <NavLink to="/SignIn" className="navMenu">SignIn</NavLink>
                        </li>
                        <li className='header-list'>
                            <NavLink to="/Cart" className="navMenu cartlogoCntnr">
                                <span className='itemNo_inCart'>{totalItem}</span>
                                <BsCart4 className='cartlogo' /><span className='cartlogoTitle'>Cart</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;