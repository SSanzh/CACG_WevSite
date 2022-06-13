<template>
    <div class="main">
        <the-main-block></the-main-block>
        <about-services></about-services>
        <partners-vacancy></partners-vacancy>
    </div>
</template>

<script>
import AboutServices from '@/components/mainPage/AboutServices.vue'
import TheMainBlock from '@/components/mainPage/MainBlock.vue'
import PartnersVacancy from '@/components/mainPage/PartnersVacancy.vue'
export default {
  components: { TheMainBlock, AboutServices, PartnersVacancy },

}
</script>

<style>

.main {
  width: 100%;
}

</style>