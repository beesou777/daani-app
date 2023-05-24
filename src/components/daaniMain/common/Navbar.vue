<template>
  <div class="container-fluid b-primary py-3 px-4 border-bottom position-fixed" style="background:#fff;z-index:9">
    <div class="back-button">
      <i class="fas fa-bars medium" @click="hideSideNav"></i>
    </div>
  </div>
</template>

<script setup>
import { useNavbarStore } from "../../../store/navbarStore";

// variables
const navbarStore = useNavbarStore();

const hideSideNav = () => {
  navbarStore.hide = !navbarStore.hide;
  const mainElement = document.querySelector("main");

if (mainElement) {
  if (navbarStore.hide) {
    mainElement.style.paddingLeft = "250px";
  } else {
    mainElement.style.paddingLeft= "0px";
  }
}
};
</script>