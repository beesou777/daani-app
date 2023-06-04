<template>
  <div class="">
    <div class="card p-3">
      <h5 class="pb-4 large t-primary">Add Product Image</h5>
      <div class="text-center">
        <label for="image">
          <i class="fas fa-camera p-2 large t-primary" @click="openFileInput"></i>
        </label>
        <br />
        <input type="file" id="product_image" name="product_image" accept="image/*" ref="fileInputRef" @change="onFileChange" style="display: none" />
      </div>
      <div class="text-center">
        <h6 class="py-2 small t-primary">Upload the image</h6>
      </div>
      <div v-if="file || productStore.productID?.product_image">
        <img :src="imageUrl" alt="Product Image" class="img-fluid" style="width:100%;height:300px;object-fit:cover"/>
      </div>
      <div class="button">
      </div>
    </div>
    <div class="card my-3">
      <button @click="sendDataApi" class="b-secondary py-2 border-0 text-light fs-5">{{ currentRouter !== "/dashboard/product/add" ? "Edit Product" : "Add Product" }}</button>
    </div>
  </div>
</template>

<script setup>
// imports
import { ref, computed, watch } from "vue";
import { useProductStore } from "../../../../store/productStore";
import router from "../../../../router";

const file = ref(null);
const fileInputRef = ref(null);
const productStore = useProductStore();
const props = defineProps({
  data: Object
});
const currentRouter = ref(router.currentRoute.value.fullPath)

function onFileChange(event) {
  file.value = event.target.files[0];
  props.data.product_image = file.value
}

function openFileInput() {
  fileInputRef.value.click();
}

const imageUrl = computed(() => {
  if (router.currentRoute.value.name === "product-edit") {
    return productStore.productID?.product_image || "";
  } else {
    return file.value ? URL.createObjectURL(file.value) : "";
  }
});

watch(file, (newValue) => {
  if (router.currentRoute.value.name === "product-edit") {
    productStore.productID.product_image = newValue ? URL.createObjectURL(newValue) : "";
  }
});

const id = ref(router.currentRoute.value.params.id)

async function sendDataApi() {
  if (router.currentRoute.value.name === "product-edit") {
    if (file.value || productStore.productID?.product_image) {
      const formData = new FormData();

      if (file.value) {
        const imageBlob = new Blob([file.value]);
        formData.append("product_image", imageBlob, file.value.name);
      } else {
        formData.append("product_image", productStore.productID.product_image);
      }

      formData.append("product_name", props.data.product_name);
      formData.append("product_categorie", props.data.product_categorie);
      formData.append("regular_price", props.data.regular_price);
      formData.append("product_unit", props.data.product_unit);

      const id = productStore.productID._id;
      await productStore.UpdateProduct(formData, id);
      router.push('/dashboard/product/details');
    }
  } else if (router.currentRoute.value.name === "product-add") {
    if (file.value) {
      const formData = new FormData();
      const imageBlob = new Blob([file.value]);
      formData.append("product_image", imageBlob, file.value.name);

      formData.append("product_name", props.data.product_name);
      formData.append("product_categorie", props.data.product_categorie);
      formData.append("regular_price", props.data.regular_price);
      formData.append("product_unit", props.data.product_unit);

      await productStore.createProduct(formData);
      router.push("/dashboard/product/details");
    }
  }
}


</script>

<style scoped>
.form-input {
  height: 4rem;
  border: 3px solid #f1f1f1 !important;
  border-radius: 0.7rem;
  padding: 0.5rem 1rem !important;
  font-size: 1.2rem !important;
}

.form-input:focus:hover,
.form-input:focus {
  border: 3px solid #084e88 !important;
}

.form-input:hover {
  border: 3px solid #ccc !important;
  transition: 0.7s;
}
</style>
