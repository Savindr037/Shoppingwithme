import './Home.css';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import Footer from './Footer';

import { useSelector } from "react-redux";

function Home() {

    const cartState = useSelector((state) => state.Reducer );
    const ProductList = cartState.ProductList;
    // console.log("cartState", cartState);


    return (
        <>
            {/* <div className="over-all-PageCntnr"> */}
                <div className="headerCntnr">
                    <Header />
                </div>
                <Sidebar />
                <div className="main-contentCntnr">
                    <div className="productsCntnr">
                        {
                            ProductList.map((curItem) => {
                                return <ProductCard key={curItem.id} product = {curItem}/>
                            })
                        }
                    </div>
                </div>
                <div className="footerCntnr">
                    <Footer />
                </div>
            {/* </div> */}
        </>
    )
};

export default Home
