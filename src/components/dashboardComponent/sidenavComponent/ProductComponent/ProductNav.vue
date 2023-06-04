<template>
  <div>
    <div class="d-flex justify-content-between align-items-center py-3 border-bottom px-4">
      <div class="d-flex flex-row">
        <!-- <i class="fas fa-angles-left pt-2 text-dark"></i> -->
        <h3 class="fw-semibold  ps-2 fs-4 t-primary">{{ pageName }}</h3>
      </div>
      <!-- <div v-if="routeName === 'product-add'">
        <button class="b-secondary text-light py-2 px-3 border-0 rounded-1" @click="sendDataApi">Add Products</button>
      </div> -->
    </div>
  </div>
</template>

<script setup>
// imports

import { computed,onMounted,ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '../../../../store/productStore';
import axios from 'axios';

const router = useRouter();
const productStore = useProductStore()
const routeName = router.currentRoute.value.name;
const route = ref(router.currentRoute.value.params.id)
const emit = defineEmits(['sendData']);
const pageName = computed(() => {
if(routeName == "product-add"){
  if (routeName == 'product-list') {
    return "Product Page"
  } else if (routeName == 'product-category') {
    return "Category Page"
  } else if (routeName == "product-add") {
    return "Add Product"
  }
}else{
  return "Edit Product"
}
})

const props = defineProps({
  data: Object,
  sendDataApi:Function
});

onMounted(async()=>{
  productStore.productID
  if(routeName == "product-edit"){
    const id = route.value
  try {
    const res = await axios.get(`product/${id}`)
    productStore.productID = res.data.product
    localStorage.setItem("product_details",JSON.stringify(res.data.product))
  } catch (error) {
    console.log(error)
  }
  }
})

</script>

<style scoped>
a:hover {
  color: #000;
}

.position-fixed {
  background-color: #fafbfb;
  z-index: 100;
}
</style>