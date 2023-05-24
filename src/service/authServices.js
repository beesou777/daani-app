import axios from 'axios';
import router from '../router';

class AuthService {
  async login(username, password) {
    try {
      const response = await axios.post('user_accounts/login/', { username, password });
      localStorage.setItem('token', JSON.stringify(response.data))
      return Promise.resolve(response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return Promise.reject('Invalid username or password');
      } else {
        return Promise.reject('An error occurred while trying to log in');
      }
    }
  }

  async logout() {
    localStorage.clear();
    router.push('/login')
  }

  // async register(form) {
  //   return axios.post('/user_accounts/user/', {
  //     username: user.username,
  //     email: form.email,
  //     password: form.password,
  //     password2: form.password2,
  //     firstname: form.first_name,
  //     lastname: form.last_name,
  //   })
  //     .then(res => {
  //         return Promise.resolve(res.data);
  //     })
  //     // error handling
  //     .catch((error) => {
  //       console.log("this is error")
  //       return Promise.resolve(error)
  //     })
  // }
}

export default new AuthService();