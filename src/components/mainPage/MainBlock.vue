<template>
  <div class="container">
    <the-header></the-header>
    <div class="main">
      <div class="content">
        <p class="pre_header">{{ content.preHeader }}</p>
        <p class="header">{{ content.headerText }}</p>
        <p class="shadow_text">{{ content.shadowText }}</p>
        <main-button :width="'220px'" :mt="'50px'">{{ content.buttonText }}</main-button>
      </div>
      <div class="videos">
        <img src="@/assets/images/chel1.png">
        <img src="@/assets/images/chel2.png">
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguageStore } from '@/stores/language.js'
import { mainBlockText } from './MainBlock.js'
import MainButton from '../UI/MainButton.vue'
import TheHeader from '../TheHeader.vue'

export default {
  components: {
    MainButton, TheHeader
  },
  setup()  {
    const langStore = useLanguageStore()

    return { langStore }
  },
  data(){
    return {
      content: mainBlockText.RU,
    }
  },
  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },

  watch: {
    getLanguage(newLang){
      this.content = mainBlockText[newLang];
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 1080px;
  width: 1920px;
  font-family: FFDinPro;
  background: linear-gradient(163.28deg, #FFFFFF 9.02%, #EDF5EE 88.12%);
}
.main{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 980px;
  width: 1920px;

}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 651.7px;

  margin-top: 253px;
}
.pre_header{
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;

  color: #50BE95;

  letter-spacing: -0.02em;
}
.header{
  font-weight: 900;
  font-size: 45px;
  line-height: 45px;
  
  margin-top: 20px;
}
.shadow_text{
  font-weight: 500;
  font-size: 24px;
  line-height: 116.82%;

  color: rgba(0, 0, 0, 0.5);

  margin-top: 40px;
}
.videos{
  &>:first-child{
    position: absolute;
    width: 555.34px;
    height: 659.53px;
    top: 213px;
    left: 72px;
  }
  &>:last-child{
    position: absolute;
    width: 543px;
    height: 624px;
    top: 283px;
    left: 1279px;
  }
}
</style>