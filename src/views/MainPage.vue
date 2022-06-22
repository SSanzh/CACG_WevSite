<template>
    <div class="main">
        <the-main-block :content="content.mainBlock"></the-main-block>
        <about-services></about-services>
        <partners-vacancy :content="content.partnersVacancy"></partners-vacancy>
    </div>
</template>

<script>

import { mainPageText } from './MainPage.js'
import { useLanguageStore } from '@/stores/language.js'
import AboutServices from '@/components/mainPage/AboutServices.vue'
import TheMainBlock from '@/components/mainPage/MainBlock.vue'
import PartnersVacancy from '@/components/mainPage/PartnersVacancy.vue'

export default {
  components: { 
    TheMainBlock, 
    AboutServices, 
    PartnersVacancy, 
  },
  setup()  {
    const langStore = useLanguageStore()

    return { langStore }
  },
  data() {
    return {
      content: mainPageText[this.langStore.language],
    }
  },
  provide() {
    return {
      content: this.content
    }
  },
  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },

  watch: {
    getLanguage(newLang){
      this.content = mainPageText[newLang];
    }
  }
}
</script>

<style>

.main {
  width: 100%;
}

</style>