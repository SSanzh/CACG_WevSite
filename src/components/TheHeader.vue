<template>
  <div class="main_header">
    <div class="container">
      <div class="logo">
        <img @click="$router.push('/')" src="@/assets/images/Logo.svg" alt="CACG">
      </div>
      <div class="menu">
        <router-link :to="item.link" v-for="item in headerText.headerMenu" :key="item">
          {{ item.name }}
        </router-link>
      </div>
      <div class="lang-switch">
        <div class="current" @click="openLangMenu()">
          {{ getLanguage }} 
          <img ref="arrow" src="@/assets/svg/arrow.svg" alt="arrow">
        </div>
        <div class="lang-module" v-if="langMenu">
          <img class="ar" src="@/assets/svg/polygon.svg" alt="polygon">
          <div v-for="item in lang" :key="item" 
          :class="{selected: getLanguage==item}" 
          @click="changeLanguages(item)">
              {{ item }} <img :src="require(`@/assets/images/${item}.png`)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { headerText } from './TheHeader.js'
import { useLanguageStore } from '@/stores/language.js'

export default {
  setup() {
    const languageStore = useLanguageStore()

    return { languageStore }
  },
  data() {
    return {
      headerText: headerText.RU,
      langMenu: false,
      lang: ['RU', 'KZ', 'EN'],
    }
  },

  methods: {

    openLangMenu(){
      let arrow = this.$refs.arrow;
      this.langMenu = !this.langMenu;

      if(this.langMenu){
        arrow.style.transform = 'rotate(-180deg)';
        arrow.style.transition = '0.5s';
      } else {
        arrow.style.transform = 'rotate(0deg)';
        arrow.style.transition = '0.5s';
      }
    },
      
    changeLanguages(lang){
      this.languageStore.setLanguage(lang);
      this.openLangMenu();
    },
  },
  computed: {
    getLanguage() {
      return this.languageStore.language
    }
  },

  watch: {
    getLanguage(newLang){
      this.headerText = headerText[newLang];
    }
  }

}
</script>

<style lang="scss" scoped>
.main_header {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
}
.container{
  width: 75%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo{
  width: 40%;

  &>img {
    cursor: pointer;
  }
}
.menu {
  display: flex;
  align-items: center;
  height: 100%;

  &>a{
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;
    padding: 0 20px;
    text-decoration: none;

    &:hover{
      color: #50BE95;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
.current {
  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 20px;
  line-height: 20px;

  &:hover{
      cursor: pointer;
  }
}
.lang-module{
  height: 97px;
  width: 100px;

  border-radius: 9px;

  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  position: absolute;

  margin-top: 16px;
  margin-left: -30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  z-index: 100;
  background-color: #FFFFFF;

  &>div:hover{
    cursor: pointer;
  }

  &>.selected{
    color: #50BE95;
  }
}
.ar{
  position: absolute;
  top: -8px;
  pointer-events: none;
}
.flag{
  margin-top: 10px;
}
</style>