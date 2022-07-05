import React from 'react'
import './SignIn.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';


function SignIn() {
    return (
        <>
            <div className="over-all-PageCntnr">
                <div className="headerCntnr">
                    <Header />
                </div>
                <Sidebar />
                <div className="main-contentCntnr">
                    Signin Page
                </div>
                <div className="footerCntnr">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default SignIn;