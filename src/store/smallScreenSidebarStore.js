import {defineStore} from 'pinia';

export const useSidebarStore = defineStore('sidebarStore',{
    state:() => ({
         showSmallScreenOrder: false,
         showSmallScreenAddress: false,
         sidebar:true,
    }),
})