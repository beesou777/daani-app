import {defineStore } from 'pinia';
import categoryService from '../service/categoryService';

export const useCategoryStore = defineStore('categoryStore',{
    state: () => ({
        categoryList: null,
        searchCategoryData: null,
        
    }),

    actions: {
        async getAllCategory() {
            try {
                await categoryService.getAllCategory()
                    .then(response => {
                        this.categoryList = response
                        
                    })  
            } catch (error) {
                console.log(error);
            }
        },

        async createCategory(data) {
            console.log(data);
            try {
                await categoryService.createCategory(data)
                    .then(response => {
                        this.categoryList.push(response);
                    })
            } catch (error) {
                console.log(error);
            }
        },

        async deleteCategory(id) {
            try {
                await categoryService.deleteCategory(id)
                    .then(response => {
                        const newCategory = this.categoryList.filter(item => item.id !== id);
                        this.categoryList = newCategory;
                    })
            } catch (error) {
                console.log(error);
            }
        },

        async showcategorySearchValue(matchingItems) {
            this.searchCategoryData = matchingItems;
        }
    }
})