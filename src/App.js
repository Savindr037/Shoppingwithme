import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import CreateAccount from './components/CreateAccount'
// import Error from './components/Error';
import ProductDetailPage from './components/ProductDetailPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='SignIn' element={<SignIn />} />
          <Route path='Createaccount' element={<CreateAccount />} ></Route>
          <Route path='Cart' element={<Cart />} />
          <Route path='*' element={<Home />} />
          <Route path='/ProductDetailPage' element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
