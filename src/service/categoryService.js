import axios from 'axios';


class categoryService {

    async getAllCategory() {
        try {
            const response= await axios.get('product/categories/');
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async createCategory(data) {
        try {
            const response= await axios.post('product/categories/', data)
            return Promise.resolve(response.data);
        } catch (error) {
            if(error.response && error.response.status === 400) {
                return Promise.reject('API error');
            } else {
                return Promise.reject('Error fetching data');
            }
        }
    }

    async updateCategory(id) {
        try {
            const response= await axios.put(`product/categories/${id}`)
            return Promise.resolve(response)
        } catch (error) {
            console.log(error);
        }
    }

    async deleteCategory(id) {
        try {
            const response= await axios.delete(`product/categories/${id}`)
            return Promise.resolve(response)
        } catch (error) {
            console.log(error);
        }
    }

}

export default new categoryService();