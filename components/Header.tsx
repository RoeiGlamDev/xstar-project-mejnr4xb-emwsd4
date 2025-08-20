Here's a simple implementation of a `Header` component for your luxury dark AirBNB website named HouseIL, designed with an elegant and high-end aesthetic in pink and black colors. This code is written in TypeScript and uses React.

// components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-text">HouseIL</Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/listings" className="nav-link">Listings</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

### CSS (Header.css)
You can create a CSS file named `Header.css` to style the header component. Here’s a basic example of how you might style it:

/* Header.css */

.header {
  background-color: black;
  color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.logo-text {
  color: pink;
  text-decoration: none;
}

.nav {
  display: flex;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: pink;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: white; /* Change color on hover for effect */
}

### Usage
To use the `Header` component, simply import it into your main application file or wherever you want to include it:

import Header from './components/Header';

// Inside your main component
<Header />

This setup provides a clean and elegant header suitable for a luxury-themed website. You can further customize the styles and structure as needed.