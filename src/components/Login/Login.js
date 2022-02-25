import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {user, googleSignIn} = useAuth();
    const location = useLocation();
    console.log("location ,",location.state?.from);
    const history = useHistory();
    const redirect_uri = location.state?.from || "/shop";

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log("user from google, ", result.user);
            history.push(redirect_uri);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
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
                <button className="btn-regular" onClick={handleGoogleSignIn}>Google SignIn</button>
            </div>
        </div>
        </div>
    );
};

export default Login;