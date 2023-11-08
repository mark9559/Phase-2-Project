import React from 'react';
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
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sneakers" element={<SneakerList />} />
          <Route path="/about" element={<About />} /> {/* New About route */}
          <Route path="/cart" element={<Cart />} /> {/* Add the Cart route */}
          <Route path="/orders" element={<Orders />} /> {/* Add the Orders route */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
