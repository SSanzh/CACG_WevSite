<template>
  <div class="container">
    <div class="title">{{content.title}}</div>
    <img class="image" src="../../assets/images/aboutPage/about2.png" alt="">
    <div class="text">{{content.Text}}</div>
    
    <div class="line"></div>
  </div>
</template>

<script>
import { useLanguageStore } from '@/stores/language.js'
import { aboutMissionText } from './AboutMission.js'

export default {
  setup()  {
    const langStore = useLanguageStore()

    return { langStore }
  },
  data(){
    return {
      content: aboutMissionText.RU,
    }
  },
  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },

  watch: {
    getLanguage(newLang){
      this.content = aboutMissionText[newLang];
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

.title {
  position: absolute;
  width: 100%;
  height: 36px;
  top: 75px;

  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height, or 100% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #50BE95;
}

.image {
  position: absolute;
  left: 660px;
  top: 179px;
}

.text {
  position: absolute;
  width: 51%;
  height: 72px;
  left: 24.5%;
  top: 760px;

  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  /* or 129% */

  text-align: center;
  letter-spacing: -0.02em;
}

.line {
  position: absolute;
  width: 75%;
  height: 0px;
  left: 12.5%;
  top: 930px;

  border: 2px solid #D3BFBF;
}



</style>