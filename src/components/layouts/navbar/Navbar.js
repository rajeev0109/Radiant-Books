import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ darkTheme, darkText }) => {
  return (
    <section
      className={`navbar-container ${
        darkTheme ? 'background-dark relative' : 'background-transparent'
      }`}
    >
      <div className="container flex justify-between align-center">
        <Link to="/" className="logo">
          Radiant <span className="text-primary">Books</span>
        </Link>

        <nav className="nav-links-container">
          <Link
            to="/"
            className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}
          >
            Home
          </Link>
          <Link
            to="/books"
            className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}
          >
            Books
          </Link>
          <Link
            to="/login"
            className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`${darkText ? 'nav-links-dark' : 'nav-links'}`}
          >
            Signup
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
