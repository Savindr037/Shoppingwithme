import React from 'react'
import './Error.css';
import { NavLink } from 'react-router-dom';

function Error() {
    return (
        <>
            <div className='errorPage'>
                <div className="error">
                    <h1>404 error</h1>
                    <p>This page doesn't exist.</p>
                    <h2>Would you like to <span>learn about HTTP errors?</span></h2>
                </div>
                <NavLink to="/" className="gotoHomePage">Go to Home</NavLink>
            </div>
        </>
    )
}

export default Error;