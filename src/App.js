import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import Error from './components/Error';
import HomeContextProvider from './components/HomeContextProvider';
import CartContextProvider from './components/CartContextProvider';

function App() {
  return (
    <>
      <HomeContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='SignIn' element={<SignIn />} />
              <Route path='Cart' element={<Cart />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </HomeContextProvider>
    </>
  );
}

export default App;
