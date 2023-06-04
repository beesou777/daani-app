import axios from 'axios';
// const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
axios.defaults.baseURL = 'https://eccomerce-production-ec27.up.railway.app/api/';
// axios.defaults.baseURL = 'http://localhost:4000/api/';
// 
export default axios;