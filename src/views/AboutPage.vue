<template>
    <div class="main">
      <the-after-header :content="content.title" />
      <our-principals/>
      <the-main-info/>
    </div>    
</template>

<script>
import { aboutPageText } from './AboutPage'
import TheMainInfo from '@/components/aboutPage/MainInfo.vue'
import OurPrincipals from '@/components/aboutPage/OurPrinciples.vue'
import TheAfterHeader from '@/components/TheAfterHeader.vue'

export default {
  components: { TheMainInfo, OurPrincipals, TheAfterHeader },

  data() {
    return {
      content: aboutPageText.RU,
    }
  },
  
}
</script>

<style>

</style>