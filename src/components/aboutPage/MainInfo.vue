<template>
  <div class="container">
    <about-company style="height: 931px"></about-company>
    <about-mission style="height: 1005px"></about-mission>
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
  width: 100%;
  height: 3443px;
}




</style>