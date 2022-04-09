import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please register Now!</h3>

            <form >
                <input type="text" placeholder='your name' />
                <br></br>
                <input type="email" placeholder='your email' />
                <br></br>
                <input type="password" name="" id="" placeholder='your password' />
                <br></br>
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;