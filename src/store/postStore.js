import { defineStore } from 'pinia';
import axios from 'axios';

export const usepostStore = defineStore('postStore', {
  state: () => ({
    postList: [],
    id:null,
    comment: [],
    userPOst : null,
    matching:null
  }),

  actions: {
    async getPost() {
      try {
        const res = await axios.get('posts/')
        this.postList = res.data.posts;
      } catch (error) {
        console.log(error);
      }
    },
    async addPost(data) {
      try {
        const headers = {
          'Content-Type': 'application/json',
        };
    
        const res = await axios.post('/posts', data,{ headers });
        const newPost = res.data.post;
        this.postList.push(newPost);
      } catch (error) {
        console.log(error);
      }
    },
    
    

    async updateLike(updatedData) {
      try {
        await axios.patch(`posts/${this.id}/`, updatedData);
        // Assuming the response contains the updated data, you can update the like count in the store
      } catch (error) {
        console.log(error);
      }
    },
    
    async addComment(data){
      try {
       const res= await axios.post('comments/',data)
       this.comment = res.data
      } catch (error) {
        console.log(error)
      }
    },
    showSearch(matchingItems){
      this.matching = matchingItems
    }
  },
});
