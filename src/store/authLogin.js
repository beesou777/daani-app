//imports
import { defineStore } from "pinia";
import router from '../router/index'
import AuthService from '../service/authServices'
import axios from "axios";

//store

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser:null,
  }),
  getters: {
    is_auth: (state) => !!state.authUser,
  },
  actions: {
    
    // login user
    async login(data) {
      try {
        const response = await axios.post("/login",data)
        if(response.data){
          localStorage.setItem("userUUID",JSON.stringify(response.data))
        }
        router.push('/')
      } catch (error) {
        console.log(error)
        // handle the error here
      }
    },    

    // when a user is logined then store the access token in localstorage in api.js
    
    // register user
    async register(data) {
      try {
        const res = await axios.post("/register", data);
        if(res.data){
          router.push('/login')
        }
        
      } catch (error) {
        console.log(error);
      }
    },
    

  },
});