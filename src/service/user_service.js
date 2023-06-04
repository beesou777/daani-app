import axios from 'axios';

class AuthService {
  async login(username, password) {
    return axios.post('user_accounts/login/', { username, password })
      .then(response => {
        var data = response.data
        const status = response.status
        if (status === 200) {
          return Promise.resolve(data)
        }
      })
      .catch((error) => {
        return Promise.reject(error)
      })
  }
  logout() {
    localStorage.removeItem('user');
  }

  async register(username, password, password2, first_name, last_name, email, phone) {
    const data = {
      username,
      password,
      password2,
      first_name,
      last_name,
      email,
      phone,
     
    };
    try {
      const response = await axios.post('/user_accounts/user/', data);
      return Promise.resolve(response)
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }
}

export default new AuthService();