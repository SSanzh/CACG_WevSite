<template>
  <div class="container">
    <img class="image" src="../../assets/images/aboutPage/about1.png" alt="">
    <div class="text-container">
      <div class="text1">{{content.Text1}}</div>
      <div class="text2">{{content.Text2}}</div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import { useLanguageStore } from '@/stores/language.js'
import { aboutCompanyText } from './AboutCompany.js'

export default {
  setup()  {
    const langStore = useLanguageStore()

    return { langStore }
  },
  data(){
    return {
      content: aboutCompanyText.RU,
    }
  },
  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },

  watch: {
    getLanguage(newLang){
      this.content = aboutCompanyText[newLang];
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

.image {
  position: relative;
  left: 198px;
  top: 257px;
}

.text-container {
  position: absolute;
  left: 748px;
  top: 315px;
  width: 927px;
  height: 331px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-weight: 500;
  font-size: 26px;
  line-height: 36px;
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