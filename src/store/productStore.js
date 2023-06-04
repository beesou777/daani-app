import { defineStore } from 'pinia';
import productService from '../service/productService';


export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    productID:null,
    isApi:false
  }),

  actions: {
    // to fget all product
    async getAllProduct() {
      this.isApi = true
      try {
        await productService.getAllProduct()
        .then((res) => {
          this.products = res.products;
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.isApi = false;
      }
    },

    // to create post
    async createProduct(data) {
      return productService
        .createProduct(data)
        .then((res) => {
          this.products.push(res);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // to patch the oriuct
    async UpdateProduct(data,id) {
      return productService
        .updateProduct(data, id)
        .then((res) => {

          this.products.push(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    // to delete the product
    async deleteProduct(id) {
      try {
        await productService.deleteProduct(id)
          .then((response) => {
          console.log(response)
          });
      } catch (error) {
        console.log(error);
      }
    }
    
    

    // // to get the product single
    // async getSingleProduct(id) {
     
    // },


    // storeProduct(uuid) {
    //   let productCounts = JSON.parse(localStorage.getItem('product_count')) || [];
    //   let matchingIndex = productCounts.findIndex(storedUUID => storedUUID.uuid === uuid);
    //   if (matchingIndex !== -1) {
    //     productCounts[matchingIndex].count++; // increment the count for the existing UUID
    //   } else {
    //     productCounts.push({ uuid: uuid, count: 1 }); // add a new UUID with count of 1
    //   }
    //   this.productCount = productCounts;
    //   localStorage.setItem('product_count', JSON.stringify(productCounts));
    //   this.updateBagCount()
    // },

    //   decrease and remove
    // decreaseProduct(uuid) {
    //   let productCounts = JSON.parse(localStorage.getItem('product_count')) || [];
    //   let matchingIndex = productCounts.findIndex(storedUUID => storedUUID.uuid === uuid);
    //   if (matchingIndex !== -1) {
    //     if (productCounts[matchingIndex].count - 1 != 0) {
    //       productCounts[matchingIndex].count--; // decrement the count for the existing UUID
    //     } else {
    //       productCounts.splice(matchingIndex, 1); // remove the UUID from the array
    //     }

    //   }
    //   this.productCount = productCounts;
    //   localStorage.setItem('product_count', JSON.stringify(productCounts));
    //   this.updateBagCount()
    // },

    // updateBagCount() {
    //   let data = JSON.parse(localStorage.getItem("product_count"));
    //   let totalCount = 0

    //   for (let item in data) {
    //     totalCount += data[item].count
    //   }

    //   this.bagCount = totalCount;
    // },

    // uuid => count
    // getCount(uuid) {
    //   let data = JSON.parse(localStorage.getItem("product_count"))
    //   let current_product = data?.find(e => e.uuid == uuid)
    //   if (current_product) {
    //     return current_product.count - 1
    //   } else {
    //     // handle the case where the uuid is not found in the data array
    //     return 0
    //   }
    // },
    // getTotalPrice() {
    //   let total = this.productList?.reduce((acc, product) => {
    //     return acc + product.overall_price;
    //   }, 0);
    //   // JSON.stringify(localStorage.setItem("overall_price",total))
    //   this.total_price = total
    // },
    // getDiscoundted(discountAmount) {
    //   var orderDetails = localStorage.getItem('order_details') || {}
    //   let total = this.productList.reduce((acc, product) => {
    //     return acc + product.overall_price;
    //   }, 0);

    //   // JSON.stringify(localStorage.setItem("overall_price",total));
    //   let discountedTotal = this.total_price - total * discountAmount;
    //   let roundedTotal = this.total_price - Math.ceil(discountedTotal);

    //   this.discounted_price = { total_price: total, grand_total: roundedTotal }
    //   localStorage.setItem("order_details", JSON.stringify({ total_price: total, grand_total: roundedTotal }))
    //   // orderDetails.push = this.order_details
    //   // this.orderDetails.push({total: total, grand_total: roundedTotal});
    //   // localStorage.setItem('order_details', JSON.stringify(this.orderDetails));
    // },
    // productDelete(uuid) {
    //   let data = JSON.parse(localStorage.getItem("product_count")) || [];
    //   let current_product_index = data.findIndex((e) => e.uuid === uuid);
    //   if (current_product_index !== -1) {
    //     data.splice(current_product_index, 1); // remove the item with the specified uuid from the data array
    //     localStorage.removeItem(uuid); // remove the corresponding item from localStorage
    //     this.productList = data;
    //     localStorage.setItem("product_count", JSON.stringify(data)); // update localStorage with the updated data array
    //     this.productCount = this.products.filter((item) => item.id !== uuid); // update the products array with the updated list of products
    //   } else {
    //     // handle the case where the uuid is not found in the data array
    //     return 0
    //   }

    // },
    // // to delete the discounted price from store and locastorage
    // removeFirstDiscountedPrice() {
    //   localStorage.removeItem("order_details")
    //   this.discounted_price = null
    // },
    // getProductList() {
    //   if (localStorage.getItem("product_count")) {
        // let products = JSON.parse(localStorage.getItem("product_count")); // parse as JSON
        // var product_data_list = [];
        // for (let item of products) {
        //   // use for...of
        //   var product_data = {
        //     name: "",
        //     price: "",
        //     qty: 0,
        //     image: "",
        //     overall_price: 0,
        //   };

        //   let current_element = this.products?.find(
        //     (el) => el.uuid === item.uuid // use === for comparison
        //   );

          // if (current_element != null) {
          //   product_data["name"] = current_element.name;
          //   product_data["uuid"] = current_element.uuid;
          //   product_data["price"] = current_element.regular_price; // fix typo
          //   product_data["image"] = current_element.main_image;
          //   product_data["qty"] = item.count;
          //   product_data["overall_price"] =
          //     current_element.regular_price * item.count;
          // }
          // product_data_list.push(product_data); // use push instead of append
    //     }
    //     this.productList = product_data_list;
    //     return product_data_list;
    //   }
    // },
    // async showSearchValue(matchingItems) {
    //   this.searchValueData = matchingItems
    // },
    // showRecentSearchedData(storedNames) {
    //   this.recentSearchedData = storedNames
    // },
  }
});
