import axios from 'axios';
const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
axios.defaults.baseURL = 'https://dani-server.onrender.com/';

export default axios;