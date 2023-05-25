<template>
  <div class="container-fluid b-primary py-3 px-4 border-bottom position-fixed" style="background:#fff;z-index:9">
    <div class="back-button d-flex align-items-center gap-5">
      <i class="fas fa-bars medium" @click="hideSideNav"></i>
    <div class="text-center">
      <p class="m-0 t-primary">In case while you upload post if image is not upload then upload small side images</p>
    </div>
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