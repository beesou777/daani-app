<script setup>
// imports
import { ref,watch } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useProductStore } from "../../../store/productStore";

const router = useRouter()
const productStore = useProductStore()
watch(()=>{
  if(router.currentRoute.value.name !== "product-edit"){
    productStore.productID = null
    if(localStorage.getItem("product_details")){
      localStorage.removeItem("product_details")
    }
  }
})
// props
const props = defineProps({
  active: String,
});

// variables
var home = ref(false);
var order = ref(false);
var product = ref(false);


props.active == "home-tab" ? (home = true) : (home = false);
props.active == "order-tab" ? (order = true) : (order = false);
props.active == "product-tab" ? (product = true) : (product = false);

//
</script>

<template>
<div class="flex-shrink-0 p-3 sideNav" style="width: 280px;">
    <a href="/" class="d-flex align-items-center pb-3 mb-3 link-light text-decoration-none border-bottom">
      <svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-5 fw-semibold">Fashion-Store</span>
    </a>
    <ul class="list-unstyled ps-0">
      <li class="mb-1 w-100 text-left w-100">
        <router-link to="/dashboard/" class="b-secondary border-0  text-light text-start ps-1 w-100">
        Home
        </router-link>
      </li>
      <li class="mb-1 w-100">
        <button class="b-secondary border-0 btn-toggle text-light collapsed text-start  w-100" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
         Product
        </button>
        <div class="collapse" id="dashboard-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li class="w-100"><RouterLink to="/dashboard/product/add" class="link-light rounded w-100">Add Product</RouterLink></li>
            <li><router-link to="/dashboard/product/details/" class="link-light rounded">Display Product</router-link></li>
            <!-- <li><a href="#" class="link-dark rounded">Monthly</a></li>
            <li><a href="#" class="link-dark rounded">Annually</a></li> -->
          </ul>
        </div>
      </li>
      <li class="mb-1">
        <button class="b-secondary border-0 text-light btn-toggle w-100 text-start rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div class="collapse" id="orders-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded"></a></li>
            <li><a href="#" class="link-dark rounded">Shipped</a></li>
            <li><a href="#" class="link-dark rounded">Returned</a></li>
          </ul>
        </div>
      </li>
      <li class="border-top my-3"></li>
      <li class="mb-1">
        <button class="b-secondary text-light  border-0 btn-toggle rounded collapsed w-100 text-start" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
        <div class="collapse" id="account-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-light rounded">Change Password</a></li>
            <li><a href="#" class="link-light rounded">visit website</a></li>
            <li><a href="#" class="link-light rounded">Log out</a></li>
          </ul>
        </div>
      </li>
    </ul>
</div>
</template>

<style scoped>
a {
  background: transparent !important;
  font-family: "Lato" !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 19px !important;
  color: #ffffff;
  padding: 1rem;
  letter-spacing: 1px;
}

a:hover {
  color: #ffffff !important;
}
</style>