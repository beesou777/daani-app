import axios from 'axios';

class orderServices {
  async getCustomerData(data) {
    return axios.get('orders/order/')
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }

  async getOrderData(data) {
    return axios.get('orders/order/')
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  async getProduct() {
    return axios.get('/product/products/')
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  async getQuantities() {
    return axios.get(`/product/productquantities/`)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  async addCustomer(data) {
    return axios.post("/user-accounts/customer/", data)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  async deleteOrder(id) {
    try {
      const response = await axios.delete(`/orders/order/${id}`);
      return Promise.resolve(response);
    } catch (error) {
      console.log(error);
    }
  }
  async createOrder(data) {
    return axios.post('/orders/order/', data)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  }
  async getAccountOrder() {
    const shippingData = JSON.parse(localStorage.getItem('shipping_address'));
    let email = shippingData.email;
    return axios.get(`email-retrive-order/?email=${email}`)
      .then(res => {
        return Promise.resolve(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export default new orderServices();