import axios from 'axios';
import Swal from 'sweetalert2'


const Axios = axios.create({
    baseURL: process.env.PUBLIC_BASE_URL || 'http://localhost:4000',

});
Axios.interceptors.request.use((req) => {
    req.headers.authorization = `BEARER ${localStorage.getItem("accessToken")}`;
    return req;
});


Axios.interceptors.response.use(
    res => res,
    err => {
        if (err.response.status === 500) {
            // console.log('error');
            // console.log(err.response.data.msg);
            throw new Error(err.response.data.msg)
        }
        else if (err.response.status === 403) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Session Expired. Please login again',

            })
            // throw new Error(`${err.config.url} not authorized`);

        }
        // throw err;
    }
);
export function setHeader(token: string) {
    console.log('setting header');
    Axios.interceptors.request.use((req) => {
        req.headers.authorization = localStorage.getItem(token);
        return req;
    });
}

export default Axios;