<template>
  <div class="container">
    <div class="backgroundImg">
      <div class="title">{{ content.Text }}</div>
      <div class="company">CACG</div>
    </div>
  </div>
</template>

<script>
import { aboutTitleText } from "./AboutTitle.js";
import { useLanguageStore } from "@/stores/language.js";

export default {
  data() {
    return {
      content: aboutTitleText.RU,
    }
  },
  setup() {
    const langStore = useLanguageStore()

    return{ langStore }
  },
  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },
  

  watch: {
    getLanguage(newLang) {
      this.content = aboutTitleText[newLang];
    }
  }
}

</script>

<style scoped>
.container{
  height: 600px;
  width: 1920px;
  font-family: FFDinPro;
  background: linear-gradient(163.28deg, #FFFFFF 9.02%, #EDF5EE 88.12%);
}

.backgroundImg {
  margin-top: 100px;
  height: 500px;
  width: 1920px;
  background-image: url("@/assets/images/aboutPageTitlePic.png");
  position: relative;
}

.title {
  position: relative;
  top: 189px;
  left: 790px;
  height: 36px;
  width: 350px;

  font-family: FFDinPro;
  letter-spacing: -0.02em;
  font-weight: 700;
  text-align: center;
  line-height: 36px;
  font-size: 48px;

  color: #FFFFFF;
}

.company {
  position: absolute;
  width: 760px;
  height: 36px;
  left: 581px;
  top: 275px;

  font-family: FFDinPro;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;

  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: 'calt' off;

  color: #50BE95;
}
</style>