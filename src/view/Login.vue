<template>
    <section class="vh-100" style="background: #f1f1f1 !important;">
     <div class="container pt-2 h-100">
       <div class="row d-flex justify-content-center align-items-center h-100">
         <div class="col col-xl-12">
           <div>
             <div class="d-flex justify-content-center">
               <div>
                 <div class="card p-4 text-black">
                   <form @submit.prevent>
                     <div class="d-flex align-items-center t-primary large mb-3 rounded-2 pb-1">
                        DaAnI
                     </div>
 
                     <h5
                       class="fw-normal mb-3 pb-3"
                       style="letter-spacing: 1px;"
                     >Log in to your account.</h5>
 
                     <div class="mb-4">
                       <label class="form-label" for="form2Example17">Username:</label>
                       <input type="text" id="form2Example17" class="form-control form-control-lg" v-model="username" />
                     </div>
 
                     <div class="mb-4">
                       <label class="form-label" for="form2Example27">Password:</label>
                       <input
                         type="password"
                         id="form2Example27"
                         class="form-control form-control-lg"
                         v-model="password"
                       />
                     </div>
 
                     <div class="pt-1 mb-2 w-100">
                       <button class="b-secondary py-2 w-100 text-light border-0" @click="userLogin">Login</button>
                     </div>
                    <div class="row py-2">
                     <div class="d-flex flex-row gap-2 py-2">
                       <p class="pb-lg-2 m-small" style="color: #393f81;">Don't have an account?</p>
                       <router-link to="/register" style="color: #393f81;" class="m-small">Register here</router-link>
                     </div>
                    </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
 </template>
 <script setup>
 //imports
 import { ref } from "vue";
 import {useAuthStore} from "../store/authLogin"
 
 
 //variables
 const username = ref("");
 const password = ref("");

 const userStore = useAuthStore();
 
 //methods
 async function userLogin() {
    const data = {
        username:username.value,
        password:password.value
    }
   userStore.login(data);
 }
 </script>
