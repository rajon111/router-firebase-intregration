import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
import './header.css'

const auth = getAuth(app)
const Header = () => {
    // const {handleSignOut,user} = useFirebase()
   const [user] = useAuthState(auth)
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
                    <button onClick={()=>signOut(auth)}>Sign Out</button>
                    :
                    <Link to='/login'>Log In</Link>
                }
            </nav>
        </div>
    );
};

export default Header;