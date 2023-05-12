import './App.css';
import Header from './components/Header';
import Shop from './components/Shop';
import ProductPage from './components/ProductPage';
import Gallery from './components/Gallery';
import User from './components/User';
import Cart from './components/Cart';
import {useState} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
}

  return (
    <div className="App">
      <Header navigate={navigate} cart={cart} />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/shop" element={<Shop cart={cart} addToCart={addToCart} />} />
        <Route path="/shop/:id" element={<ProductPage cart={cart} addToCart={addToCart} />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
}

export default App;
