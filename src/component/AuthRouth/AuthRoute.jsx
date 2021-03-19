import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../App";

const AuthRoute = ({children, ...rest}) => {
    const [ LoggedInUserInfo ] = useContext(UserContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
            LoggedInUserInfo?(
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
};

export default AuthRoute;