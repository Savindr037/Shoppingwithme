import React, { useState } from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    const [display, setDisplay] = useState(false);
    const display_none = () => {
        setDisplay(!display)
    }

    return (
        <>
            <div className={sidebar ? "crossCntnr" : "hamburgerCntnr"} onClick={showSidebar} >
                <span className="hamburger-line  cross-line line-1"></span>
                <span className="hamburger-line  cross-line line-2"></span>
                <span className="hamburger-line  cross-line line-3"></span>
            </div>

            <div className={sidebar ? "display-blur" : "display-none"} onClick={display_none}></div>
            <div className={sidebar ? "show-SidebarCntnr" : "hide-SidebarCntnr" || display ? "hide-SidebarCntnr" : "show-SidebarCntnr"} >
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