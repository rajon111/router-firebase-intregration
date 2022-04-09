import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './header.css'

const Header = () => {
    const {handleSignOut} = useFirebase()
    const {user} = useFirebase()
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Regiser</Link>
                <span>{user?.displayName && user?.displayName }</span>
                {
                    user?.uid ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <Link to='/login'>Log In</Link>
                }
            </nav>
        </div>
    );
};

export default Header;