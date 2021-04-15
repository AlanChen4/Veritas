import axios from 'axios';

const axios_instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + localStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axios_instance.interceptors.response.use(
    response => response,
    error => {
        const original_request = error.config;

        if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
            const refresh_token = localStorage.getItem('refresh_token');
            
            return axios_instance
                .post('/account/token/refresh/', {
                    refresh: refresh_token
                })
                .then((response) => {
                    localStorage.setItem('access_token', response.data.access);
                    localStorage.setItem('refresh_token', response.data.refresh);

                    axios_instance.defaults.headers['Authorization'] = 'JWT ' + response.data.access;
                    original_request.headers['Authorization'] = 'JWT ' + response.data.acess;

                    return axios_instance(original_request)
                })
                .catch(err => {
                    console.log(err);
                });
        }
        return Promise.reject({...error});
    }
);

export default axios_instance;
