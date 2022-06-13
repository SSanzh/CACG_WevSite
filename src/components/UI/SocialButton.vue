<template>
    <div class="block" @click="openLink()">
        <div class="icon">
            <img :src="require(`@/assets/svg/${icon}.svg`)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
    },
    methods: {
        openLink() {
            window.open(this.link, '_blank');
        }
    }
}
</script>

<style lang="scss" scoped>
.block {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
    border: 0.5px solid rgba(255, 255, 255, 0.5);
    
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
    }
}
</style>