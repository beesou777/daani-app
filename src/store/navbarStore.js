import { defineStore } from 'pinia';

export const useNavbarStore = defineStore('navbarStore', {
  state: () => ({
    hide:false,
  }),
});
