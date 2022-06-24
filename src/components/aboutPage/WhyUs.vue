<template>
  <div class="container">
    <div class="title">{{content.title}}</div>
    <img class="image" src="../../assets/images/aboutPage/about3.png" alt="">
    <div class="text-container">
      <div v-for="item in content.list" :key="item" class="text-line">
        <div class="circle"></div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
  width: 100%;

}

.title {
  position: absolute;
  left: 12.5%;
  height: 36px;
  top: 73px;

  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  /* identical to box height, or 100% */

  text-align: start;
  letter-spacing: -0.02em;

  color: #50BE95;
}

.image {
  position: absolute;
  left: 12.5%;
  width: 26%;
  top: 210px;
}

.text-line {
  position: relative;
  
}

.text-container {
  position: absolute;
  width: 40%;
  height: 47%;
  left: 45%;
  top: 210px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.circle {
  position: absolute;
  top: 10px;
  width: 13px;
  height: 13px;
  
  border-radius: 50%;
  background: #50BE95;
}

.text {
  position: relative;
  left: 38px;

  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;

  letter-spacing: -0.02em;
}

</style>