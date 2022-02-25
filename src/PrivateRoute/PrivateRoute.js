import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {Redirect} from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    // const location = useLocation();
    return (
        <Route
        render={({location})=>
        user.email?children:<Redirect to={{
            pathname:"/login",
            state:{from: location}
        }}/>}
        >
        </Route>
    );
    
    // return user.email?children:<Redirect to="/login" state={{from: location}}/>
};

export default PrivateRoute;