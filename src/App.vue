<template>
  <div class="app">
    <the-header :class="{'headroom--unpinned': scrolled}"  v-on="handleScroll" class="headroom hidden_header"/>
    <router-view></router-view>
    <the-footer></the-footer> 
  </div>
</template>

<script>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue';
export default {
  components: { TheFooter, TheHeader },

  data() {
    return {
      limitPosition: 100,
      scrolled: false,
      lastPosition: 0
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      if(window.scrollY>0){
        if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
          this.scrolled = true;
          // move up!
        } 
        
        if (this.lastPosition > window.scrollY) {
          this.scrolled = false;
          // move down
        }
        
        this.lastPosition = window.scrollY;
        // this.scrolled = window.scrollY > 250;
      }else{
        this.scrolled = false;
      }
    }
  },

}
</script>

<style lang="scss">


@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
}

@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face{
  font-family: 'Gotham';
  src: url('assets/fonts/GothamBold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}

@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-Bold.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-BoldItalic.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
}

@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-Italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-LightItalic.ttf') format('truetype');
    font-weight: 300;
    font-style: italic;
}

@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
}

@font-face{
  font-family: 'FFDinPro';
  src: url('assets/fonts/FFDinPro-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #343434;
}

.app{
  overflow-x: hidden;
  font-family: FFDinPro;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hidden_header {
  position: fixed;
  z-index: 1;
  background-color: #FFFFFF;
}

.headroom {
    will-change: transform;
    transition: transform 0.5s linear;
}
.headroom--pinned {
    transform: translateY(0%);
}
.headroom--unpinned {
    transform: translateY(-100%);
}
</style>
