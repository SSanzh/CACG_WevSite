<template>
    <div class="main">
      <the-after-header :content="content.title" />
      <our-principals :content="content.ourPrinciples" />
      <div class="wrapper">
        <about-company :content="content.aboutCompany" style="height: 931px"></about-company>
        <about-mission :content="content.aboutMission" style="height: 1005px"></about-mission>
        <about-values :content="content.aboutValues" style="height: 622px"></about-values>
        <why-us style="height: 622px"></why-us>
      </div>
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
  
}

</script>

<style>
  .wrapper {
    background: linear-gradient(132.63deg, #FCFCFC 18.7%, #EEEDED 84.53%);
  }
</style>