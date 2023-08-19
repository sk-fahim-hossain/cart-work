import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="menu">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/review'>Order Review</Link>
        </nav>
    );
};

export default Header;