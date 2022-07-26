import './ProductDetailPage.css'
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';


const ProductDetailPage = () => {

    // const { updatedCartList } = useContext(HomeContext);
    // console.log(updatedCartList)

    // const { detailsPage } = useContext(HomeContext);
    // console.log(detailsPage)

    // const {cartList} = useContext(HomeContext);
    // console.log(cartList)

    // const { addtoCart } = useContext(HomeContext);

    return (
        <>
            <div className="over-all-PageCntnr">
                <div className="headerCntnr">
                    <Header />
                </div>
                <Sidebar />
                <div className="main-contentCntnr">
                    <div className="product-detailCntnr">
                        <div className="product">
                            <div className="imgCntnr">
                                <img src="" alt="" />
                            </div>
                            <div className="add-to-Cart-n-buy-NowCntnr">
                                <button className="addToCart-btn"  onClick={true} >Add to Cart</button>
                                <button className="buyNow-btn">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerCntnr">
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default ProductDetailPage