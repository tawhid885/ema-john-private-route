import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {user, googleSignIn} = useFirebase();
    return (
        <div className='login-sec'>
            <div>
                <h2>Login</h2>
            <br /><br />
            <form onSubmit="">
                <input type="email" name="" id="" placeholder='your email'/>
                <br /><br />
                <input type="password" name="" id="" />
                <br /><br />
                <input type="submit" value="Login" />
            </form>
            <p>New to ema-john <NavLink to="/register">Create New Account</NavLink></p>
            <div>-------------or----------------</div>
            <div className="third-party">
                <button className="btn-regular" onClick={googleSignIn}>Google SignIn</button>
            </div>
        </div>
        </div>
    );
};

export default Login;