import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';

import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formValues;

    const handleSubmitForm = (e) => {

        e.preventDefault();

        dispatch( startLogin(email, password) );

    }

    return (
        <>
            <h3 className="auth_title" >
                SocialNetwork login
            </h3>

            <form onSubmit={handleSubmitForm} >
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth_input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth_input"
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="auth_button"
                >
                    Login
                </button>

                <Link 
                    to="/auth/signup"
                    className="link"
                >
                    Create new account    
                </Link>
            </form>
        </>
    )
}
