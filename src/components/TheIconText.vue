<template>
    <div class="container">
        <img :src="require(`@/assets/svg/${item.svg}`)" alt="">
        <p class="title" v-if="item.title" :style="item.titleStyle">{{ item.title }}</p>
        <p class="description" v-if="item.description" :style="item.descriptionStyle">{{ item.description }}</p>
    </div>
</template>

<script>
export default {
    props:{
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    max-width: 230px;
    text-align: center;
    letter-spacing: -0.02em;
    font-feature-settings: 'calt' off;

    background: linear-gradient(180deg, #383838 0%, #717171 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
.title{
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
}
.description{
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
}

</style>