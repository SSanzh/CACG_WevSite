<template>
    <div class="main">
      <the-after-header :content="content.title" />
      <our-principals :content="content.ourPrinciples" />
      <about-company :content="content.aboutCompany" style="height: 931px"></about-company>
      <about-mission :content="content.aboutMission" style="height: 1005px"></about-mission>
      <about-values></about-values>
      <why-us></why-us>
    </div>    
</template>

<script>
import { aboutPageText } from './AboutPage.js'
import { useLanguageStore } from '@/stores/language.js'
import OurPrincipals from '@/components/aboutPage/OurPrinciples.vue'
import TheAfterHeader from '@/components/TheAfterHeader.vue'
import AboutCompany from "@/components/aboutPage/AboutCompany.vue";
import AboutMission from "@/components/aboutPage/AboutMission.vue";
import AboutValues from "@/components/aboutPage/AboutValues.vue";
import WhyUs from "@/components/aboutPage/WhyUs.vue";


export default {
  components: { 
    OurPrincipals,
    TheAfterHeader,
    AboutCompany,
    AboutMission,
    AboutValues,
    WhyUs
  },
  setup()  {
    const langStore = useLanguageStore()

    return { langStore }
  },
  data() {
    return {
      content: aboutPageText[this.langStore.language],
    }
  },
  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },
<<<<<<< HEAD
  
=======

  watch: {
    getLanguage(newLang){
      this.content = aboutPageText[newLang];
    }
  }
>>>>>>> 14e11345527964706a58be98968d951af3e4c59e
}

</script>

<style>

</style>