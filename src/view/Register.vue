<template>
  <section class="vh-100" style="background: #f1f1f1 !important;overflow:hidden">
    <div class="container pt-2 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div>
          <div style="border-radius: 1rem;">
            <div class="d-flex justify-content-center">
              <div class="align-items-center">
                <div class="card p-4 px-lg-5 text-black">
                  <form @submit.prevent>
                    <div class="d-flex align-items-center large t-primary">
                        DaAnI
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Create an account</h5>

                    <!-- user first and last name -->

                    <div>
                      <div>
                        <label class="form-label" for="form2Example17">Full Name:</label>
                        <input
                          type="text"
                          id="form2Example17"
                          class="form-control form-control-lg"
                          v-model="name"
                          placeholder="full name"
                        />
                      </div>
                    </div>

                    <!-- user phonenumber and email -->
                    <div class="row pt-3">
                      <div class="col-md-6">
                        <div class="mb-4">
                          <label class="form-label" for="form2Example17">phone Number:</label>
                          <input
                            type="number"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            v-model="phone"
                            placeholder="phone number"
                          />
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="mb-4">
                          <label class="form-label" for="form2Example17">username:</label>
                          <input
                            type="text"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            v-model="username"
                            placeholder="username"
                          />
                        </div>
                      </div>
                    </div>

                    <!-- user password -->
                      <div>
                        <div class="mb-4">
                          <label class="form-label" for="form2Example17">Password</label>
                          <input
                            type="password"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            v-model="password"
                            placeholder="Create your password"
                          />
                        </div>
                      </div>

                    <div class="pt-1 mb-2">
                      <button
                        class="button btn-lg btn-block b-secondary text-light border-0 py-2 fw-bolder"
                        @click="userRegister"
                      >Register</button>
                    </div>

                    <div class="d-flex flex-row gap-2 mt-3">
                      <p class="m-small text-muted">Already have an account?</p>
                      <router-link to="/login" class="m-small text-muted">Login</router-link>
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
const name = ref("");
const phone = ref("");
const userStore = useAuthStore();

// methods to register user
async function userRegister() {
    const data = {
        username:username.value,
        password:password.value,
        name:name.value,
        phone:phone.value
    }
    userStore.register(data)
}
</script>