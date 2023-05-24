import axios from 'axios';
const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
axios.defaults.baseURL = 'https://daani-app.vercel.app/';

export default axios;