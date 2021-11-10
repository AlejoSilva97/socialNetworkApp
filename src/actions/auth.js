import Swal from "sweetalert2";

import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startSignUp = (name, email, password) => {
    return async (dispatch) => {

        const endpoint = 'auth/register';
        const data = {
            name,
            email,
            password
        }
        const method = 'POST';

        const res = await fetchWithoutToken(endpoint, data, method);
        const body = await res.json();

        if (body.ok) {
            
            Swal.fire('Ok !', 'El usuario se creo correctamente', 'success');

        }else {

            //Faltan las validaciones de los campos para evitar bugs
            Swal.fire('Error ', body.msg, 'error');

        }

    }
}

export const startLogin = (email, password) => {
    return async (dispatch) => {

        const endpoint = 'auth';
        const data = {
            email,
            password
        }
        const method = 'POST';

        const res = await fetchWithoutToken(endpoint, data, method);
        const body = await res.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }));

        }else{

            Swal.fire('Error', body.msg, 'error');

        }

    }
}

const login = (user) => ({
    type: types.login,
    payload: user
})

export const startChecking = () => {
    return async(dispatch) => {
        //fetchWithToken
        const res = await fetchWithToken('auth/renew/');
        const body = await res.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        }else{
            dispatch( finishChecking() );
        }

    }
}
export const finishChecking = () => ({
    type: types.checking
});