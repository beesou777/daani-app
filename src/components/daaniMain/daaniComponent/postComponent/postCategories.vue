<template>
    <div class="pe-5 position-sticky d-none d-lg-block" style="top:50px">
       <div>
        <p class="large pt-3">Categories:</p>
        <div class="card py-3 px-2">
            <div class="categories border-bottom" v-for="(data,index) in postCategories" :key="index">
            <p class="small b-primary t-primary m-2 hover">
                {{ data.cate }}
            </p>
        </div>
        </div>
       </div>
      
    </div>
</template>

<script setup>
// imports

import { computed, ref } from 'vue';
import { usepostStore } from '../../../../store/postStore';


// variables
const postStore = usepostStore()

const postCategories =ref([
    {"cate":"Fashion"},
    {"cate":"Clothes"},
    {"cate":"Body Product"},
    {"cate":"Food"},
    {"cate":"Student Product"},
    {"cate":"Starionery"},
    {"cate":"other"},
])

</script>

<style scoped>
.hover{
    cursor: pointer;
}

.hover:hover{
    text-decoration: underline;
}
</style>