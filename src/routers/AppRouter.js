import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { startChecking } from '../actions/auth';
import { Publications } from '../components/socialNetwork/Publications';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch]);

    if(checking){
        return <div
            className="loader-div"
        >
            <h3>Por favor espere...</h3>
        </div>
    }

    return (

        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        path="/auth"
                        component={AuthRouter}
                        isAuth={!!uid}
                    />

                    <PrivateRoute 
                        path="/"
                        component={Publications}
                        isAuth={!!uid}
                    />

                    <Redirect to="/auth" />
                    
                </Switch>
            </div>
        </Router>

    )

}