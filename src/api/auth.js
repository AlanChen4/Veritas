import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_HOST;
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

let tokenRequest = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

const loginUser = (email, password) => {
    const loginData = {email: email, password: password}

    return tokenRequest.post(`/account/token/obtain/`, loginData)
        .then((response) => {
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
            return Promise.resolve(response.data);
        }).catch((error) => {
            return Promise.reject(error);
        });
}

const refreshToken = () => {
    const refreshData = {'refresh': localStorage.getItem(REFRESH_TOKEN)}

    return tokenRequest.post(`/account/token/refresh/`, refreshData)
        .then((response) => {
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            return Promise.resolve(response.data);
        }).catch((error) => {
            return Promise.reject(error);
        });
}

const isCorrectRefreshError = (status) => {
    return status === 401;
}

/**
 * authRequest
 * 
 * This refreshes the request and retries token if invalid.
 * This is used for requests that need authorization.
 */
const authRequest = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        'Authorization': `JWT ${localStorage.getItem(ACCESS_TOKEN)}`,
        'Content-Type': 'application/json',
    }
});
authRequest.interceptors.response.use(
    (response) => response, // this is for all successful requests.
    (error) => { //handle the request
        return errorInterceptor(error)
    }
);

const errorInterceptor = (error) => {
    const originalRequest = error.config;
    const status = error.response.status;
    if (isCorrectRefreshError(status)) {
        return refreshToken().then((data)=> {
            const headerAuthorization = `JWT ${localStorage.getItem(ACCESS_TOKEN)}`;
            authRequest.defaults.headers['Authorization'] = headerAuthorization;
            originalRequest.headers['Authorization'] = headerAuthorization;
            return authRequest(originalRequest)
        }).catch((error)=> {
            // if token refresh fails, logout the user to avoid potential security risks.
            logoutUser();
            return Promise.reject(error)
        })
    }
    return Promise.reject(error)
}

const logoutUser = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    authRequest.defaults.headers['Authorization'] = "";
}

export { tokenRequest, authRequest,
    loginUser, logoutUser, refreshToken, errorInterceptor,
    BASE_URL, ACCESS_TOKEN, REFRESH_TOKEN }