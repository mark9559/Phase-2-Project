import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SneakerList from './components/SneakerList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Orders from './components/Orders';

function App() {
  // Initialize the cart state
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Pass the cart state and setCart function to SneakerList */}
          <Route path="/sneakers" element={<SneakerList cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
