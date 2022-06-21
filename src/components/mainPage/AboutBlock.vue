<template>
  <div class="main_about">
    <div class="top_content">
      <div class="picture">
        <img src="@/assets/images/aboutPic.png">
      </div>
      <div class="content">
        <div class="header">
          {{ content.headerText }}
        </div>
        <div class="pre_header">
          {{ content.preHeader }}
        </div>
        <div class="devider_line"></div>
        <div class="description">
          {{ content.description }}
        </div>
        <div class="button">
          <main-button :mt="'55px'">{{ content.buttonText }}</main-button>
        </div>
      </div>
    </div>
    <div class="statistic_info">
      <the-icon-text v-for="item in content.list" :item="item" :key="item"></the-icon-text>
    </div>
  </div>
</template>

<script>
import MainButton from '../UI/MainButton.vue'
import TheIconText from '../TheIconText.vue'
import { aboutBlockText } from './AboutBlock.js'
import { useLanguageStore } from '@/stores/language'

export default {
  components: { MainButton, TheIconText },
  setup() {
    const langStore = useLanguageStore()

    return { langStore }
  },
  data() {
    return {
      content: aboutBlockText.RU,
    }
  },
  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },


  watch: {
    getLanguage(newLang){
      this.content = aboutBlockText[newLang];
    }
  }
}
</script>

<style lang="scss" scoped>
.main_about{
  margin: auto;
  height: 1080px;
  width: 75%;
  border-bottom: 2px solid #D3BFBF;
  font-family: FFDinPro;
}
.top_content{
  display: flex;
  justify-content: space-between;

  padding-top: 96px;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 53%;
}
.header{
  font-weight: 700;
  font-size: 42px;
  line-height: 48px;
}
.pre_header{
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: #50BE95;
  margin-top: 20px;
}
.devider_line{
  width: 337px;
  height: 3px;
  background: rgba(0, 0, 0, 0.43);;
  margin: 40px 0;
}
.description{
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
}

.statistic_info{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 169px;
}

.statistic_info > div {
  justify-self: center;
}
</style>