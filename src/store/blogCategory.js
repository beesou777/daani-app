import { defineStore } from "pinia"
import router from "../router";
import CategoryService from '../service/catergoryService';

export const useblogCategory= defineStore('category', {
    state: () => ({
        categories: []
    }),

    getters: {
        // get_categories: (state) =>  state.categories.length
    },

    actions: {
        async readAllCategory() {
            try{
                const response= await CategoryService.ReadAllCategory();
                this.categories= response;
            }catch(error){
                console.log(error);
            }
        },

        async addCategory(data) {
            try {
                const response = await CategoryService.CreateCategory(data);
                this.categories.push(response);
            } catch (error) {
                console.log(error);
                
            }
        },

        async deleteCategory(slug) {
            try {
                await CategoryService.deleteCategory(slug)
                .then (res => {
                    const newCategory = this.categories.filter(item => item.slug !== slug)
                    this.categories = newCategory;
                })
            } catch (error) {
                console.log(error);
            }
        }

        // addCategory(categoryData) {
        //     this.categories.push(categoryData);
        // }
    }
})