<template>
  <div class="sideNav border-end" v-if="navbarStore.hide == true">
    <div class="logo text-center pe-5 large t-primary pt-4">dAaNi</div>
    <div class="links pt-3 d-flex flex-column">
      <ul>
        <li class="d-flex gap-3 align-items-center py-2">
          <i class="fa-regular fa-user medium"></i>
          <a href="#" class="small t-color">Profile</a>
        </li>
        <router-link to="/" class="d-flex gap-3 align-items-center py-2">
          <i class="fa-regular fa-home medium"></i>
          <a href="#" class="small t-color">Home</a>
        </router-link>
       
      </ul>
      
    </div>
  </div>
</template>

<script setup>
import { useNavbarStore } from '../../../store/navbarStore';


// variales
const navbarStore = useNavbarStore()


</script>