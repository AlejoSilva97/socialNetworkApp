import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="auth_container">
            <div className="auth_formbox">
                <Switch>

                    <Route 
                        exact 
                        path="/auth/login"
                        component={LoginScreen}    
                    />

                    <Route 
                        exact 
                        path="/auth/signup"
                        component={RegisterScreen}    
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
