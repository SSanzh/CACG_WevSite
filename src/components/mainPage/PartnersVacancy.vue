<template>
  <div class="main">
    <p class="header_text partners">{{ content.headerText2 }}</p>
    <div class="wrapper">
      <div class="blur"></div>
      <div class="inner">
        <img class="partner" v-for="partner in content.partners" :key="partner" :src="partner" alt="">
      </div>
      <div class="inner">
        <img class="partner" v-for="partner in content.partners" :key="partner" :src="partner" alt="">
      </div>
    </div>
    <div class="vacancy">
      <p class="header_text">{{ content.headerText1 }}</p>
      <div class="content">
        <div class="image">
          <img :src="content.img" alt="">
        </div>
        <div class="text">
          <p class="content_header">{{ content.content.header }}</p>
          <p class="context">{{ content.content.text }}</p><br>
          <p class="context">{{ content.content.text2 }}</p>
          <main-button :mt="'98px'" :width="'232px'">{{ content.content.buttonText }}</main-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from '../UI/MainButton.vue'
export default {
  components: { MainButton },
  props: {
    content: {
      type: Object,
      required: true
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  background: #FCFCFC;
}
.header_text {
  font-weight: 700;
  font-size: 42px;
  line-height: 48px;

  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: 'calt' off;

  &.partners {
    padding: 160px 0;
  }
}
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  
  overflow: hidden;
  &:hover .inner{
      animation-play-state: paused;
  }
}
.inner {
  display: flex;
  align-items: center;
  gap: 110px;
  animation: marquee 15s linear infinite;
  padding-right: 110px;

  
}
.partner:hover {
  cursor: pointer;
}
@keyframes marquee {
0% {
  transform: translateX(0%)
} 
100% {
  transform: translateX(-100%)
}
}
.blur {
  background: linear-gradient(90deg, #FCFCFC 13.33%, rgba(252, 252, 252, 0.3) 26.87%, rgba(252, 252, 252, 0) 50.54%, rgba(252, 252, 252, 0.3) 73.23%, #FCFCFC 87.29%);

  width: 100%;
  height: 127px;

  position: absolute;
  pointer-events: none;
  z-index: 3;
}
.vacancy {
  padding-top: 240px;
  width: 75%;
  margin: auto;
}
.content {
  display: flex;
  padding-bottom: 180px;
  padding-top: 94px;
}
.text {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  /* or 150% */

  letter-spacing: -0.02em;
  font-feature-settings: 'calt' off;

  text-align: left;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.content_header {
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  /* identical to box height, or 112% */

  letter-spacing: -0.02em;
  font-feature-settings: 'calt' off;

  text-align: center;

  color: #50BE95;

  padding-bottom: 87px;
  padding-top: 83px;
}
.context {
  width: 80%;
  text-align: center;
}
</style>