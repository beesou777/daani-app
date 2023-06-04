//imports
import { defineStore } from "pinia";
import router from '../router/mainRouter';
import AuthService from '../services/user_service'
import axios from "axios";

//store
export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: JSON.parse(localStorage.getItem('user')) || null,
    refreshToken: JSON.parse(localStorage.getItem('refresh_token')) || null,
    accessToken: JSON.parse(localStorage.getItem('access_token')) || null,
    userDetails: JSON.parse(localStorage.getItem('userDetails')) || null,
    error: '',
  }),

  
  getters: {
    is_auth: (state) => !!state.authUser,
  },


  actions: {
    async login(username, password) {
      return AuthService.login(username, password)
        .then((res) => {
          console.log(res.msg) //login success message
          this.saveData(res)
          router.push('/')
        })
        .catch(error => {
          // if any error occurs
          const errorMessage = error?.response?.data?.non_field_errors || error?.response?.data?.username || error?.response?.data?.password || "Unknown error";
          console.log(errorMessage instanceof Array ? errorMessage[0] : errorMessage);
        })
    },
    saveData(data) {
      this.authUser = data.uuid
      localStorage.setItem('user', JSON.stringify(data.uuid))
      localStorage.setItem('access_token', JSON.stringify(data['token']['access']))
      localStorage.setItem('refresh_token', JSON.stringify(data['token']['refresh']))
    },

    // to register user

    async register(username, password, password2, first_name, last_name, email, phone) {
      try {
        const response = await AuthService.register(username, password, password2, first_name, last_name, email, phone);
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },


    // async fetchUserDetails() {
    //   if (this.authUser) {
    //     try {
    //       const response = await axios.get(`user_accounts/user/${this.authUser}/`)
    //       localStorage.setItem('userDetails', JSON.stringify(response.data));
    //       this.userDetails = response.data
    //     } catch (error) {
    //       console.log(error.message)
    //     }
    //   }
    // },
  }
})