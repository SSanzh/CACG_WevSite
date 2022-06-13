import { defineStore } from "pinia"; 

export const useLanguageStore = defineStore('language',{
  state: () => ({
    language: 'RU' 
    
  }),

  getters: {
    getLanguage(state) {
      return state.language
    },
  },

  actions: {
    setLanguage(payload) {
      this.language = payload
    }
  }

})