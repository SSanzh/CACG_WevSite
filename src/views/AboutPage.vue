<template>
    <div class="main">
        <about-title/>
        <our-principals/>
        <the-main-info/>
    </div>    
</template>

<script>
import AboutTitle from '@/components/aboutPage/AboutTitle.vue'
import TheMainInfo from '@/components/aboutPage/MainInfo.vue'
import OurPrincipals from '@/components/aboutPage/OurPrinciples.vue'

export default {
  components: { TheMainInfo, AboutTitle, OurPrincipals },

}
</script>

<style>

</style>