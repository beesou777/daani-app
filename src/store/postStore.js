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
    saveLikes() {
      localStorage.setItem('postList', JSON.stringify(this.postList));
    },

    async getPost() {
      try {
        const res = await axios.get('posts/')
        this.postList = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async post(postData) {
      try {
        const res = await axios.post('posts/', postData);
        const newPost = res.data;
        this.postList.post(newPost);
      } catch (error) {
        console.log(error);
      }
    },
    

    async updateLike(updatedData) {
      try {
        const res = await axios.patch(`posts/${this.id}/`, updatedData);
        console.log(res);
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
