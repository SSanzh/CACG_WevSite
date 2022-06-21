<template>
    <div class="main">
      <the-after-header :content="content.title" />
      <our-principals/>
      <the-main-info/>
    </div>    
</template>

<script>
import { aboutPageText } from './AboutPage'
import { useLanguageStore } from '@/stores/language.js'
import TheMainInfo from '@/components/aboutPage/MainInfo.vue'
import OurPrincipals from '@/components/aboutPage/OurPrinciples.vue'
import TheAfterHeader from '@/components/TheAfterHeader.vue'


export default {
  components: { TheMainInfo, OurPrincipals, TheAfterHeader },
  setup()  {
    const langStore = useLanguageStore()

    return { langStore }
  },
  data() {
    return {
      content: aboutPageText.RU,
    }
  },

  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },

  watch: {
    getLanguage(newLang){
      this.content = aboutPageText[newLang];
    }
  }
}

</script>

<style>

</style>