import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'


const auth = getAuth(app)
const Login = () => {
    // const {signInWithGoogle} = useFirebase()
    const [signInWithGoogle,user ] = useSignInWithGoogle(auth)

    return (
        <div>
            <h3>Please LogIN</h3>
            <div style={{margin:'20px'}}>
                <button onClick={()=>signInWithGoogle()}>Google Sign In</button>
            </div>
            <form >
                <input type="email" placeholder='your email' />
                <br></br>
                <input type="password" name="" id="" placeholder='password' />
                <br></br>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;