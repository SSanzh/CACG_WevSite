<template>
  <div class="container">
    <about-company></about-company>
    <about-mission></about-mission>
    <about-values></about-values>
    <why-us></why-us>
  </div>
</template>

<script>
import AboutCompany from "./AboutCompany.vue";
import AboutMission from "./AboutMission.vue";
import AboutValues from "./AboutValues.vue";
import WhyUs from "./WhyUs.vue";

export default {
  components: {
    AboutCompany,
    AboutMission,
    AboutValues,
    WhyUs
  }
}


</script>


<style scoped>
.container {
  width: 1920px;
  height: 3443px;
}




</style>