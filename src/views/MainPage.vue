<template>
    <div class="main">
        <the-main-block></the-main-block>
        <about-services></about-services>
        <partners-vacancy></partners-vacancy>
    </div>
</template>

<script>
/* eslint-disable */
import AboutServices from '@/components/mainPage/AboutServices.vue'
import TheMainBlock from '@/components/mainPage/MainBlock.vue'
import PartnersVacancy from '@/components/mainPage/PartnersVacancy.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: { TheMainBlock, AboutServices, PartnersVacancy, TheHeader },
}
</script>

<style>

.main {
  width: 100%;
}

</style>