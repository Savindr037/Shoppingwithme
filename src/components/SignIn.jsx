import React from 'react'
import './SignIn.css';
import { NavLink } from 'react-router-dom';


function SignIn() {

    return (
        <>
            <div className="signIn-pageCntnr">
                <div className="signIn-page_headerCntnr">
                    <NavLink to="/" className='signIn-page_logoCntnr'>
                        <span className='logo'>Shopping</span>
                        <span className='logo-withme'>with me</span>
                    </NavLink>
                </div>
                <div className="formCntnr">
                    <form action="" className='signIn_form' >
                        <h3>Sign-In</h3>
                        <label htmlFor="mobileNumber">Mobile number</label><br />
                        <input type="number" name='number' autoComplete="off" placeholder='Mobile number' /><br />

                        <label htmlFor="password">Password</label><br />
                        <input type="password" name='password'  className='password' autoComplete="off" placeholder='Password' /><br />

                        <input type="submit" className='signIn' value="Sign-In" onClick={() => alert("Further process is under development")} />
                    </form>

                    <div className="newTo_shoppingwithmeCntnr">
                        <span className='sideOf-shoppingwithme' ></span>
                        <span className='newTo_shoppingwithme'>New to Shopping with me?</span>
                        <span className='sideOf-shoppingwithme' ></span>
                    </div>
                    <NavLink to="/CreateAccount">
                        <button className='create_anAccount'>Create an Account</button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default SignIn;