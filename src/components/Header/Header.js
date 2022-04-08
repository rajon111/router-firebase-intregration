import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>LogIn</Link>
            </nav>
        </div>
    );
};

export default Header;