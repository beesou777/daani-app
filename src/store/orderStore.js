import { defineStore } from "pinia";
import orderServices from "../services/orderServices";

export const useOrderStore = defineStore("order", {
  state: () => ({
    customerDetails: null,
    orderDetails: null,
    searchValueData: null,
    individualOrderDetails: [],
    productSearches: null,
    productData: null,
    addedProduct: JSON.parse(localStorage.getItem("added_products")) || [],
    addedCustomer: JSON.parse(localStorage.getItem("add_customer")) || [],
    addCutomers: null,
    totalPrice: null,
    accountOrder: [],
    selected_order: JSON.parse(localStorage.getItem("order_items")) ||null,
    singleOrder:JSON.parse(localStorage.getItem("single_order")) || null,
    orderId: JSON.parse(localStorage.getItem("order_invoice")) || null
  }),
  getters: {
    discount_data: (state) => state.discountData,
    added_product: (state) => state.addedProduct,
    orderData: (state) => state.individualOrderDetails,
  },
  actions: {
    async addAddedProduct(data) {
      this.addedProduct.push(...data);
    },

    async getOrders() {
      try {
        const res = await orderServices.getOrderData();
        this.orderDetails = res;
        localStorage.setItem("orders", JSON.stringify(res));
      } catch (err) {
        console.log(err);
      }
    },

    async setOrderData(data) {
      this.orderDetails = data;
    },

    async getCustomer() {
      try {
        const res = await orderServices.getCustomerData();
        this.customerDetails = res;
        localStorage.setItem("customer_details", JSON.stringify(res));
      } catch (err) {
        console.log(err);
      }
    },

    // async getSingleOrder(orderId) {
    //   var orderData = this.customerDetails.find(orderData => orderData.id == orderId)
    //   this.individualOrderDetails = orderData;

    //   return orderData;
    // },

    async showSearchValue(matchingItems) {
      this.searchValueData = matchingItems;
    },

    async productSearch(matching) {
      this.productSearches = matching;
    },

    async getProduct() {
      return await orderServices
        .getProduct()
        .then((res) => {
          this.productData = res;
          localStorage.setItem("coupon_data", JSON.stringify(res));
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async addCustomerData(data) {
      return await orderServices
        .addCustomer(data)
        .then((res) => {
          this.addCutomers = res;
          console.log(this.addCutomers);
          // localStorage.setItem('coupon_data',JSON.stringify(res))
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async deleteOrder(id) {
      try {
        await orderServices.deleteOrder(id).then((response) => {
          const newOrder = this.customerDetails.filter(
            (item) => item.id !== id
          );
          this.customerDetails = newOrder;
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getAccountOrder() {
      try {
        await orderServices.getAccountOrder().then((res) => {
          this.accountOrder = res;
        });
      } catch (error) {
        console.log(error);
      }
    },
    
  },
});
