//imports
import { defineStore } from "pinia";
import router from '../router/index'
import AuthService from '../service/authServices'
import axios from "axios";

//store

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser:null,
    userUUID: JSON.parse(localStorage.getItem("userUUID")) || null,
    name: JSON.parse(localStorage.getItem("userName")),
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
          this.userUUID = response.data.uuid
          localStorage.setItem("access-token",JSON.stringify(response.data.accessToken))
          localStorage.setItem("userUUID",JSON.stringify(response.data.uuid))
        }
        router.push('/')
      } catch (error) {
        console.log(error)
        // handle the error here
      }
    },    
    async getUser() {
      try {
        const response = await axios.get(`/users/${this.userUUID}`)
       this.authUser = response.data
       this.userName = response.data.name
       localStorage.setItem("userName",JSON.stringify(response.data.user.name))
        // router.push('/')
      } catch (error) {
        console.log(error)
        // handle the error here
      }
    },    
    
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