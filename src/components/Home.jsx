import React, { useContext } from 'react';
import './Home.css';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import Footer from './Footer';
import HomeContext from "./HomeContext";
// import showSidebar from './Header'

function HomePage() {

    const { listItem } = useContext(HomeContext)


    return (
        <>
            <div className="homePageCntnr">
                <div className="headerCntnr">
                    <Header />
                </div>
                <Sidebar />
                <div className="main-ItemCntnr">
                    <div className="productsCntnr">
                        {
                            listItem.map((curItem) => {
                                return <ProductCard key={curItem.id} {...curItem} />
                            })
                        }
                    </div>
                </div>
                <div className="footerCntnr">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default HomePage