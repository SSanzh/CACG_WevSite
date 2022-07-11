<template>
    <div class="main">
      <the-after-header :content="content.title" />
      <info-block :content="content.infoBlock" />
      <div class="wrapper">
        
      </div>
    </div>
</template>

<script>
import { servicesWebText } from './ServicesWeb.js'
import { useLanguageStore } from '@/stores/language.js'
import TheAfterHeader from '@/components/TheAfterHeader.vue'
import InfoBlock from '@/components/InfoBlock.vue'


export default {
  components: {
    TheAfterHeader,
    InfoBlock
  },
  setup()  {
    const langStore = useLanguageStore()

    return { langStore }
  },
  data() {
    return {
      content: servicesWebText[this.langStore.language],
    }
  },
  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },

}

</script>

<style>
  .wrapper {
    background: linear-gradient(132.63deg, #FCFCFC 18.7%, #EEEDED 84.53%);
  }
</style>