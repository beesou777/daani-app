<template>
    <div>
      <div class="card p-4">
        <div class="py-3">
          <label class="py-2 m-small t-primary">
            Product Name:
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control form-input" v-model="data.product_name" />
        </div>

        <div class="py-3">
          <label class="py-2 m-small t-primary">
            Select Category:
            <span class="text-danger">*</span>
          </label>
          <div>
            <select name="category" class="w-100 form-select t-primary form-control form-input" v-model="data.product_categorie">
              <option selected disabled>Select Category</option>
              <option v-for="(cat_data, index) in categoryData" :key="index" :value="cat_data" class="t-primary">
                {{ cat_data }}
              </option>
            </select>
          </div>

        </div>

        <div class="row">
          <div class="py-3 col-md-6">
            <label class="py-2 m-small t-primary">
              Regular Price
              <span class="text-danger">*</span>
            </label>
            <input type="number" class="form-control form-input py-2" v-model="data.regular_price" />
          </div>
          <div class="py-3 col-md-6">
            <label class="py-2 m-small t-primary">
              Discount Amount
              <span class="text-danger">*</span>
            </label>
            <input type="number" class="form-control form-input py-2" v-model="data.discounted_price" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="py-3">
              <label class="py-2 m-small t-primary">
                Product Unit :
                <span class="text-danger">*</span>
              </label>
              <div class="d-flex flex-row">
                <div class="position-relative">
                  <input type="number" class="form-control form-input py-2" v-model="data.product_unit"/>
                  <!-- outlays for unit selection -->
                </div>
              </div>

              <!-- quill editor -->
              
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="py-3">
              <label class="py-2 m-small t-primary">
                 Feature Product :
                <span class="text-danger">*</span>
              </label>
            
                <div class="w-100">
                  <select class="form-input w-100 t-primary" v-model="data.feature">
                    <option value="sale">sale</option>
                    <option value="hot">hot</option>
                    <option value="new" selected>new</option>
                  </select>
                  <!-- outlays for unit selection -->
                </div>
              <!-- quill editor -->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
// imports
import { ref, watch, onMounted } from 'vue';
import { useCategoryStore } from '../../../../store/categoryStore';
import { useProductStore } from '../../../../store/productStore';
import { useRouter } from 'vue-router';

// variables
const content = ref('');
const isUnitSelected = ref(false);
const productStore = useProductStore();
const router = useRouter();


function handleTextChange(data) {
  data.description = content.value.getHTML();
}

const productDetails = JSON.parse(localStorage.getItem("product_details"))


const categoryData = ref([
  "Shirts",
  "Pants",
  "Skirts",
  "Jackets",
  "Sweater",
  "Shoes",
  "Bags/Purses",
  "Socks",
  "Belts",
  "Hats/Caps"
]);

const props = defineProps({
  data: Object
});

watch(() => productStore.productID, (newValue) => {
  if (router.currentRoute.value.path.includes('product/edit')) {
    if(newValue){
      props.data.product_name = productStore.productID?.product_name;
      props.data.product_categorie = productStore.productID?.product_categorie;
      props.data.regular_price = productStore.productID?.regular_price;
      props.data.discounted_price = productStore.productID?.discounted_price;
      props.data.product_unit = productStore.productID?.product_unit;
      props.data.feature = productStore.productID?.feature;
    }
}
});


onMounted(async ()=>{
  await productStore.getAllProduct()
})





</script>


<style scoped>
/* remove increase and decrease button from input type number */
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


/* input styling */
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