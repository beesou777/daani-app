import axios from 'axios';
import router from '../router';

class PostService {

    // Post Service
    async readAllPost() {
        try {
            const response = await axios.get('api/post/');
            return Promise.resolve(response.data);
          } catch (error) {
            if (error.response && error.response.status === 400) {
              return Promise.reject('API error');
            } else {
              return Promise.reject('Error Fecthing Post');
            }
          }
    }

    async createPost(data){
        return await axios.post('api/post/', data)
          .then(response => {
            return Promise.resolve(response.data);
          })
          .catch( error => {
            return Promise.reject(error);
          })
    }
    
    async deletePost(id){
      return await axios.delete(`api/post/${id}`)
        .then(res => {
          return Promise.resolve(res.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
}

export default new PostService();