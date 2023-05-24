import axios from 'axios';
const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
// axios.defaults.baseURL = 'https://blog.saauzi.com/';
axios.defaults.baseURL = 'http://localhost:3000/';

export default axios;