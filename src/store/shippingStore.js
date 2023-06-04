import { defineStore } from 'pinia';

import shippingService from '../services/shippingService';

export const useShippingStore = defineStore('shippingStore', {
    state : () => ( {
        shippingAddress : []
    }),
    
    actions : {
        
        async getAllAddress() {
            try {
                await shippingService.getAllAddress()
                    .then(res => {
                        this.shippingAddress =  res
                    })
            } catch (error) {
                console.log(error);
            }
        },

        async createAddress(data) {
            localStorage.setItem('shipping_address', JSON.stringify(data))
            // try {
            //     await shippingService.createAddress(data)
            //         .then(res => {
            //             this.shippingAddress.push = res;
            //             console.log(res)
                        
            //             console.log(res);
            //         })
            // } catch (error) {
            //     console.log(error);
            // }
        }
    }
})