<template>
  <div class=" b-primary pb-5">
   <CreatePost/>
    <div class="row pb-5 container " style="background:#fff;min-height:100vh">
      <div
        class="container rounded-4 p-3 px-lg-5"
        v-for="(data, index) in cardData"
        :key="index"
      >
        <div class="d-flex px-2 py-2 align-items-center">
          <div class="img pe-2">
            <img
              src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt
              style="height:40px;width:40px;border-radius:50%"
            />
          </div>
          <div class="profile d-flex flex-column align-items-center" style="line-height:1.2rem">
            <p class="title text-dark fs-5 m-0">{{ data.profile_name }}</p>
            <p class="title m-0">{{ data.categories }}</p>
          </div>
        </div>
        <div class="content">
          <p class="fs-6 px-3">{{ data.description }}</p>
        </div>
        <div class="img pt-3">
          <img :src="data.image" alt="images" style="width:100%;aspect-ratio:2/1;border-radius:8px" />
        </div>
        <div class="d-flex flex-row">
          <div class="like-section py-3">
            <div class="d-flex justify-content-start ps-2 flex-column">
              <i
                :class="{'fa-regular fa-thumbs-up large t-primary': data.isLikeClicked, 'fa-regular fa-thumbs-up large': !data.isLikeClicked}"
                @click="updateLike(index, !data.isLikeClicked, $event)"
                style="cursor:pointer"
              ></i>
              <p class="pt-2 mt-2 fw-bolder">{{ data.like }} likes</p>
            </div>
          </div>
          <div class="like-section py-3">
            <div>
              <i class="fa-regular fa-message fs-4 pt-1" style="cursor:pointer"></i>
            </div>
          </div>
        </div>
        <!-- comment section -->
        <div class="comment-section border-bottom pb-2 position-relative">
          <input
            type="text"
            placeholder="Add a comment"
            class="border-0 outline-none w-100"
            style="outline:none"
            v-model="comment[index]"
          />
          <button
            class="border-0 t-primary bg-light position-absolute fw-bolder"
            style="right:10px"
            v-if="comment[index]?.length > 0"
            @click="addComment(index)"
          >Add</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  // import
  import { computed, onMounted, ref, watch } from "vue";
  import { usepostStore } from "../../../../store/postStore";
  import { useRouter } from "vue-router";
  import CreatePost from "./createPost.vue";

  // variables
  const postStore = usepostStore();
  const router = useRouter();

  const cardData = computed(() => {
  const reversedPosts = [...postStore.postList];
  return postStore.matching == null ? reversedPosts : postStore.matching;
});


  onMounted(() => {
    getPosts();
  });

  const getPosts = async () => {
    await postStore.getPost();
  };

  const updateLike = (index, isIncrement) => {
    const postData = postStore.postList[index];
    postStore.id = postStore.postList[index].id;
    postData.like = isIncrement ? postData.like + 1 : postData.like - 1;
    postData.isLikeClicked = !postData.isLikeClicked;

    const updatedData = {
      like: postData.like,
      isLikeClicked: postData.isLikeClicked,
    };
JSON.stringify
    postStore.updateLike(updatedData);
  };

  const comment = ref(Array.from({ length: cardData.value?.length }, () => ""));

  // function to add comment
  const addComment = (index) => {
    const data = {
      "product-id": index,
      username: "admin",
      image:
        "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
      comment: comment.value[index], // Get the specific comment for the given index
    };

    postStore.addComment(data);
    comment.value[index] = ""; // Reset the comment for the given index
  };

  watch(() => {
    return postStore.postList;
  }, (newPosts) => {
    if (newPosts) {
      getPosts();
    }
  });
</script>


<style scoped>
  .hover {
    cursor: pointer;
  }

  .hover:hover {
    text-decoration: underline;
  }
</style>
