<template>
  <div class="main">
    <about-block></about-block>
    <services-block></services-block>
  </div>
</template>

<script>
import AboutBlock from './AboutBlock.vue'
import ServicesBlock from './ServicesBlock.vue'
export default {
  components: { ServicesBlock, AboutBlock },
}
</script>

<style lang="scss" scoped>
.main {
  background: linear-gradient(132.63deg, #FCFCFC 18.7%, #EEEDED 84.53%);
  width: 1920px;
}
</style>