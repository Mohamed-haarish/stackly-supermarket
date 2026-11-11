
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">🥬</span>
          STACKLY<span> MART</span>
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/search" className="nav-icon" aria-label="Search">
            <Search />
          </Link>

          <Link to="/cart" className="nav-icon" aria-label="Cart">
            <ShoppingCart />
          </Link>

          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="register-btn">Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
