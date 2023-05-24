<template>
  <div class="mt-3">
    <div class="post py-4">
     
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create a Post</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Image:</label>
                  <input type="file" class="form-control" id="recipient-name" @change="image = $event.target.files[0]">

                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Description:</label>
                  <textarea class="form-control" id="message-text" placeholder="Describe your product" row="4" v-model="description"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="addPost">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card p-3 mb-3">
      <div class="row">
      <div class="d-flex flex-row  ps-lg-4 gap-2 col-lg-3 col-md-12 col-sm-12 justify-content-center justify-content-lg-center py-4 py-lg-0">
        <div class="img">
          <img
            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt
            style="height:40px;width:40px;border-radius:50%"
          />
        </div>
        <div class="d-flex flex-column" style="line-height:1.2rem">
          <p class="medium">John</p>
          <p class="fw-normal text-muted">Daani user</p>
        </div>
      </div>
      <div class="search col-lg-5 col-md-12 col-sm-12">
       <div class="position-relative">
        <input type="text" class="search py-2 px-3 w-100 rounded-9 border border-1" placeholder="search by person name or categories" v-model="searchFeature" @input="showSearch">
        <div class="position-absolute" style="right:5px;top:6px;">
          <button class="button t-primary border border-0 py-1 px-3 rounded-9" style="background:#fff">
          search
          </button>
        </div>
       </div>
      </div>
      <div class="add-post col-md-12 col-lg-4 col-sm-12">
       <div class="d-flex gap-3 justify-content-center">
        <p class="fs-4 t-primary">
          Create Post
        </p>
        <div class="create-post">
          <button
        class="button border border-2 fs-5 px-3"
        style="background:#fff"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >+</button>
        </div>
       </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../../common/Navbar.vue";
import { ref,computed } from "vue";
import {usepostStore} from "../../../../store/postStore"

const image = ref(null)
const description = ref("")
const profile_name = ref("bishwa")
const categories = ref("Fashion")
const like = ref(0)
const isLikeClicked = ref(false)
const postStore = usepostStore()


const addPost = () => {
  const file = image.value;
  const reader = new FileReader();
  
  reader.onloadend = () => {
    const imageData = reader.result;
    const postData = {
      image: imageData,
      description: description.value,
      profile_name:profile_name.value,
      categories:categories.value,
      like:like.value,
      isLikeClicked:isLikeClicked.value
    };
    postStore.post(postData)
    localStorage.setItem('post_data', JSON.stringify(postData));
  };
  
  reader.readAsDataURL(file);
};


// varaibles
const searchFeature = ref("");


const showSearch = () => {
  const searchValue = searchFeature.value.toLowerCase();
  const matchingItems = postStore.postList.filter((item) => {
    if ((item.categories && item.categories.toLowerCase().includes(searchValue)) || (item.profile_name && item.profile_name.toLowerCase().includes(searchValue))) {
      return true;
    }
    return false;
  });
  
  postStore.showSearch(matchingItems);
};



</script>