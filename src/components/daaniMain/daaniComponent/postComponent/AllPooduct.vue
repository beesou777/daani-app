<template>
    <div class="product mx-5 py-5">
        <div class="title">
            <h2>All Products</h2>
        </div>
        <div class="products row">
            <div class="col-lg-3 col-md-4 col-sm-12" v-for="(data,index) in products" :key="index">
                <div class="card position-relative mb-4">
                    <div class="feature position-absolute">
                        <p class="mb-0 py-2">{{ data.feature }}</p>
                    </div>
                    <div class="img">
                    <img :src="data.product_image" alt="image" style="width:100%;aspect-ratio:2/1.5;">
                </div>
                <div class="content py-2 px-1">
                        <h5 class="m-0">{{ data.product_name }}</h5>
                        <p class="py-0 m-0">{{ data.product_categorie }}</p>
                        <div class="d-flex gap-2">
                            <h4>NPR {{ data.regular_price }}</h4>
                            <p v-if="data.discounted_price !== 0" class="text-decoration-line-through">{{ data.discounted_price }}</p>
                        </div>
                        <div class="buttons">
                            <button class="btn btn-danger" >
                                Add to Cart
                            </button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup> 
import { computed, onMounted } from 'vue';
import { useProductStore } from '../../../../store/productStore';


// variables
const productStore = useProductStore()

onMounted(()=>{
    productStore.getAllProduct()
})

const products = computed(()=>{
    return productStore.products.slice(0,12)
})
</script>

<style scoped>
.feature{
    background: orangered;
    width: 80px;
    color: #fff;
    text-align: center;
    border-radius: 0 0 50% 0;

}
</style>