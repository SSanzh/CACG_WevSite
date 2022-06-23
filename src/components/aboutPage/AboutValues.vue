<template>
  <div class="container">
    <div class="title">{{content.title}}</div>
    <div class="card-container">
      <the-icon-text v-for="item in content.list" :item="item" :key="item"></the-icon-text>
    </div>
    
    <div class="line"></div>
  </div>
</template>

<script>
import TheIconText from '../TheIconText.vue'

export default {
  components: {TheIconText},
  props: {
    content: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

.title {
  position: relative;
  width: 100%;
  height: 36px;
  top: 110px;
  margin-bottom: 110px;

  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height, or 100% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #50BE95;
}

.card-container {
  position: relative;
  top: 110px;
  left: 12.5%;
  width: 75%;


  display: flex;
  justify-content: space-between;
}


.line {
  position: absolute;
  width: 75%;
  height: 0px;
  left: 12.5%;
  bottom: 0;

  border: 2px solid #D3BFBF;
}



</style>