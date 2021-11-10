
//Pendiente de crear las variables de entorno
const baseURL = 'http://localhost:4500/api';

const fetchWithoutToken = (endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}`;

    if (method === 'GET') {

        return fetch(url);

    }else{

        return fetch(url, {
            method,
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });

    }

}

const fetchWithToken = (endpoint, data, method = 'GET') => {

    const url = `${baseURL}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {

        return fetch(url, {
            method,
            headers: {
                'token': token
            }
        });

    }else{

        return fetch(url, {
            method,
            headers: {
                'Content-type':'application/json',
                'token': token
            },
            body: JSON.stringify(data)
        });

    }

}

export {
    fetchWithoutToken,
    fetchWithToken
}