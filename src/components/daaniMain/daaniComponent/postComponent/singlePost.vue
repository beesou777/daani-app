<template>
  <main>
    <div>
      <div v-if="singleProduct !== null || undefined">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-sm-12 py-5 my-5 px-4">
              <img :src="singleProduct.image" alt style="max-height:400px;width:100%;object-fit:contain" />
          </div>
            <div class="col-lg-7 col-md-6 col-sm-12 py-5 my-5 px-5">
                <h2 class="title t-primary">
                    {{ singleProduct.title }}
                </h2>
                <p class="small text-muted">
                   Posted by - {{ singleProduct.profile_name }}
                </p>
                <p class="medium pe-5">
                    {{ singleProduct.description }}
                </p>
            <p class="medium">
                contact : {{ singleProduct.contact }}
            </p>
                <div class="social-links small d-flex flex-row gap-2">
                    social links:
                 <div class="d-flex gap-2">
                    <a href="www.facebook.com">
                    <i class="fa-brands fa-facebook"></i>
                   </a>
                   <a href="www.instagram.com">
                    <i class="fa-brands fa-instagram"></i>
                   </a>
                 </div>
                </div>
                <p class="t-primary py-3 px-2 my-3" style="background:hsl(241, 74%, 61%,.1)">
                Note: In case if you want this product you can contact
                the user directly or message them in thier respective social account 
            </p>
            </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup>
// import
import { usepostStore } from "../../../../store/postStore";
import { useRouter } from "vue-router";
import { computed } from "vue";

// variables
const router = useRouter();
const postStore = usepostStore();

const id = router.currentRoute.value.params.slug;

const singleProduct = computed(() => {
  return postStore.postList.find(data => data.id == id);
});

</script>