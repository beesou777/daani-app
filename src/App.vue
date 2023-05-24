<template>
  <div>
    <router-view />
  </div>
</template>


<script setup>

import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import './axios';

const route = useRouter();



</script>


