import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/'

const axios_instance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Authorization': localStorage.getItem('access_token') ? "JWT " + localStorage.getItem('access_token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axios_instance.interceptors.response.use(
    response => response,
    error => {
        const original_request = error.config;

        // Prevent infinite loops
        if (error.response.status === 401 && original_request.url === baseURL+'/account/token/refresh/') {
            window.location.href = '/login/';
            return Promise.reject(error);
        }

        if (error.response.data.code === "token_not_valid" &&
            error.response.status === 401 && 
            error.response.statusText === "Unauthorized") 
            {
                const refresh_token = localStorage.getItem('refresh_token');

                if (refresh_token){
                    const token_parts = JSON.parse(atob(refresh_token.split('.')[1]));

                    const now = Math.ceil(Date.now() / 1000);
                    console.log(token_parts.exp);

                    if (token_parts.exp > now) {
                        return axios_instance
                        .post('/account/token/refresh/', {refresh: refresh_token})
                        .then((response) => {
            
                            localStorage.setItem('access_token', response.data.access);
                            localStorage.setItem('refresh_token', response.data.refresh);
            
                            axios_instance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                            original_request.headers['Authorization'] = "JWT " + response.data.access;
            
                            return axios_instance(original_request);
                        })
                        .catch(err => {
                            console.log(err)
                        });
                    }else{
                        console.log("Refresh token is expired", token_parts.exp, now);
                        window.location.href = '/login/';
                    }
                }else{
                    console.log("Refresh token not available.")
                    window.location.href = '/login/';
                }
        }
      return Promise.reject(error);
    }
);

export default axios_instance;
