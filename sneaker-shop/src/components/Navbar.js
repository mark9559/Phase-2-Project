import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top " data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Kicks Buzz</Link>
        <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/sneakers" className="nav-link">Sneakers</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link">Orders</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">Admin</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search Sneaker" aria-label="Search" id="search-input" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
