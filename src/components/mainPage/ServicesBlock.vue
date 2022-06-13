<template>
  <div class="main_services">
    <div class="header">
      Услуги
    </div>
    <div class="switcher">
        
    </div>
    <div class="content">
        
    </div>
  </div>
</template>

<script>
import { useLanguageStore } from '@/stores/language.js'
import { servicesBlockText } from './ServicesBlock.js'
export default {
  setup()  {
    const langStore = useLanguageStore()

    return { langStore }
  },
  data(){
    return {
      content: servicesBlockText.RU,
      defaultContent: servicesBlockText.default,
    }
  },
  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },

  watch: {
    getLanguage(newLang){
      this.content = servicesBlockText[newLang];
    }
  }
}
</script>

<style lang="scss" scoped>
.main_services {
  height: 100vh;
  width: 75%;
}
.line{
  border: 6px solid #9E9E9E;
  width: 345px;
  height: 0px;
}
</style>