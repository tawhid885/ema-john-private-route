import React from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='register-sec'>
            <div>
                <h2>Register</h2>
            <br /><br />
            <form onSubmit="">
                <input type="email" name="" id="" placeholder='your email'/>
                <br /><br />
                <input type="password" name="" id="" />
                <br /><br />
                <input type="submit" value="Register" />
            </form>
            <p>New to ema-john <NavLink to="/login">Already have an account?</NavLink></p>
            <div>-------------or----------------</div>
            <div className="third-party">
                <button className="btn-regular">Google SignIn</button>
            </div>
        </div>
        </div>
    );
};

export default Register;