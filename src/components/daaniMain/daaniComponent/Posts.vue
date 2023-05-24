<template>
  <main>
    <Navbar/>
    <div class="row bg-t">
      <div class="col-lg-8 col-md-12 col-sm-12">
        <UserPost />
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <PostCategories/>
      </div>
    </div>
  </main>
</template>


<script setup>
import Navbar from "../common/Navbar.vue";
import PostCategories from "./postComponent/postCategories.vue";
import UserPost from "./postComponent/userPost.vue";
</script>