//imports
import { defineStore } from "pinia";
import router from '../router/index'
import AuthService from '../service/authServices'
import axios from "axios";

//store

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: JSON.parse(localStorage.getItem('user')) || null,
    accessToken: JSON.parse(localStorage.getItem('access_token')) || null,
    refrsh_token:JSON.parse(localStorage.getItem('refresh_token')) || null,
  }),
  getters: {
    is_auth: (state) => !!state.authUser,
  },
  actions: {
    
    // login user
    async login(username, password) {
      try {
        const response = await AuthService.login(username, password)
        this.saveData(response)
        // this.fetchUserDetails()
        router.push('/dashboard')
      } catch (error) {
        console.log(error)
        // handle the error here
      }
    },    


    saveData(data) {
      this.authUser = data.uuid
      this.accessToken = data['token']['access']
      this.refrsh_token = data['token']['refresh']
      localStorage.setItem('user', JSON.stringify(data.uuid))
      localStorage.setItem('access_token', JSON.stringify(data['token']['access']))
      localStorage.setItem('refresh_token', JSON.stringify(data['token']['refresh']))
      axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']['access']}`
    },

    // when a user is logined then store the access token in localstorage in api.js
    
    // register user
    // async register(form) {
    //   this.loading = true;
    //   return AuthService.register(form)
    //     .then((res) => {
    //       this.authUser = res
    //       router.push('/login')
    //     })
    // },

    // logout user
    async logout(){
      localStorage.clear()
      
      router.push('/login')
    }


  },
});