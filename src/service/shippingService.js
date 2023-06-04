import axios from 'axios';


class shippingService {

    async getAllAddress() {
        try {
            const response = await axios.get('shipping-address');
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    async createAddress(data) {
        try {
            const response = await axios.post('shipping-address/', data);
            return Promise.resolve(response.data);
        } catch (error) {
            console.log(error);
        }
    }

}

export default new shippingService();