<template>
  <div class="principles-wrapper">
    <div class="title">{{ content.title }}</div>
    <div class="principles-flex">
      <div class="principle" v-for="item in content.principles" :key="item" v-html="item.text"></div>
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

<style lang="scss" scoped>

.principles-wrapper {
  width: 100%;
  height: 380px;
}

.title {
  position: relative;
  width: 723.75px;
  height: 36px;
  top: 73px;
  left: 598.62px;

  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;

  text-align: center;
  letter-spacing: -0.02em;

  color: #50BE95;
}

.principles-flex {
  position: relative;
  top: 166px;
  left: 240px;
  width: 75%;
  height: 72px;
  display: flex;
  justify-content: space-between;

  font-weight: 500;
  font-size: 22px;
  line-height: 36px;
  letter-spacing: -0.02em;

}

</style>