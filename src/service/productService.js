import axios from "../axios";


class productService {

    //Product Services

    async getAllProduct() {
        try {
            const response = await axios.get('product/');
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async createProduct(data) {
        // const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
        return await axios.post('product/', data,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
            .then(res => {
                return Promise.resolve(res)
            })
            .catch(error => {
                return Promise.reject(error)
            })
    }

    // async patchProduct(data, id) {
    //     console.log(id)
    //     // const accessToken = JSON.parse(localStorage.getItem('access_token')) || null;
    //     return await axios.patch(`product/${id}/`, data,{
    //         headers:{
    //             'Content-Type' : 'application/json'
    //         }
    //     })
    //         .then(res => {
    //             return Promise.resolve(res)
    //         })
    //         .catch(error => {
    //             return Promise.reject(error)
    //         })
    // }


    async updateProduct(data,id) {
        try {
            const response = await axios.patch(`product/${id}`,data,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    async deleteProduct(id) {
        try {
            const response = await axios.delete(`product/${id}`)
            return Promise.resolve(response.data)
        } catch (error) {
            console.log(error);
        }
    }

}

export default new productService();