import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startSignUp } from '../../actions/auth';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name, email, password, password2} = formValues;

    const handleSubmitForm = (e) => {

        e.preventDefault();

        dispatch( startSignUp(name, email, password) );

    }

    return (
        <>
            <h3 className="auth_title" >
                SocialNetwork sign up
            </h3>

            <form onSubmit={handleSubmitForm}>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth_input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

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

                <input 
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth_input"
                    autoComplete="off"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="auth_button"
                >
                    Sign up
                </button>

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?   
                </Link>
            </form>

        </>
    )
}
