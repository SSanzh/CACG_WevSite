<template>
    <div class="container">
        <div class="content">
            <div class="img" :style="{backgroundImage: content.img}"></div>
            <div class="text">
                <p v-for="text in content.text" :key="text">{{ text }}</p>
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
    },
}
</script>

<style lang="scss" scoped>
.container {
    background: #fff;
}
.content {
    padding: 75px 240px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.img {
    width: 320px;
    height: 230px;
}
.text {
    width: 65%;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: -0.02em;

    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>