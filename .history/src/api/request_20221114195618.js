import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://218.94.19.58:8080/',
    timeout: 10000
})

export default instance