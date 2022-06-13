<template>
  <div class="app">
    <router-view></router-view>
    <the-footer></the-footer> 
  </div>
</template>

<script>
import TheFooter from './components/TheFooter.vue'
export default {
  components: { TheFooter },

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
</style>
