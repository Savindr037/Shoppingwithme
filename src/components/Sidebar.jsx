import React, { useState } from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }


    return (
        <>
            <div className="hamburgerCntnr" onClick={showSidebar} >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </div>
            <div className={sidebar ? "show-SidebarCntnr" : "hide-SidebarCntnr"}>
                <nav className='sidebar'>
                    <div className="sidebar-header">Header</div>
                    <hr style={{ width: "100%" }} />
                    <ul>
                        <li className='list'>
                            <NavLink to="/account" className="sidebar-item"><span>Account</span></NavLink>
                        </li>
                        <li className='list'>
                            <NavLink to="/orders" className="sidebar-item"><span>Orders</span></NavLink>
                        </li>
                        <li className='list'>
                            <NavLink to="/wishlist" className="sidebar-item"><span>Wishlist</span></NavLink>
                        </li>
                        <li className='list'>
                            <NavLink to="/about" className="sidebar-item"><span>About</span></NavLink>
                        </li>
                        <li className='list'>
                            <NavLink to="/contact" className="sidebar-item"><span>Contact Us</span></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar