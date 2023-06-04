<template>
  <div>
    <SideNav />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import SideNav from "../components/dashboardComponent/navbar/sideNav.vue";

import { useRoute } from "vue-router";
const router = useRoute();



</script>