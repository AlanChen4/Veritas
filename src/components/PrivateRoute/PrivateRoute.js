import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext.js';

export default function PrivateRoute({ component: Component, ...rest}) {
    // eslint-disable-next-line no-unused-vars
    const {user, setUser} = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={props =>
                !!user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login', state: {from: props.location}}} />
                )
            }
        />
    )
}