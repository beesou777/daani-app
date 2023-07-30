import axios from 'axios';
// const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
axios.defaults.baseURL = 'https://eccomerce-ny3a.onrender.com/api/';
// axios.defaults.baseURL = 'http://localhost:4000/api/';
// 
export default axios;
