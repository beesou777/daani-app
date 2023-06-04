<template>
    <div class="body">
      <productnav />
      <div class="row p-5">
        <div class="col-md-13 col-lg-8 ">
          <ProductForm :data="data" :content="content" />
        </div>
        <div class="col-lg-4 col-sm-12 col-md-12">
          <ProductMedia :data="data"/>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
  // imports
  import { ref } from 'vue'
  import productnav from "../sidenavComponent/ProductComponent/ProductNav.vue";
  import ProductForm from '../sidenavComponent/ProductComponent/ProductForm.vue'
  import ProductMedia from "../sidenavComponent/ProductComponent/ProductMedia.vue";
  import { useProductStore } from "../../../store/productStore"
  
  const productStore = useProductStore();
  const product_name = ref("")
  const product_categorie = ref("")
  const regular_price = ref()
  const discounted_price = ref()
  const feature = ref("")
  const product_unit = ref("")
  const product_image = ref(null) // Initialize with null value
  
  let data = ref({
    product_name: product_name.value,
    product_categorie: product_categorie.value,
    regular_price: regular_price.value,
    discounted_price: discounted_price.value,
    feature: feature.value,
    product_unit: product_unit.value,
    product_image: product_image.value
  });
  
  </script>
  