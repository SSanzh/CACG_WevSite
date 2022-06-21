<template>
  <div class="container">
    <div class="backgroundImg" :style="{backgroundImage: content.bgImg}">
      <div class="title">{{ content.title }}</div>
      <div class="company">{{ content.text }}</div>
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
    },
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