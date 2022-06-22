<template>
    <input v-model="modelValue" placeholder="Input text"/>
</template>

<script>
export default {
    emits: ["update:modelValue"],
    data() {
        return {
            modelValue: ""
        };
    },
    watch: {
        modelValue: function(){
            this.$emit("update:modelValue", this.modelValue);
        }
    }
}
</script>

<style lang="scss" scoped>
input{
    width: 100%;
    height: 48px;

    background: #FFFFFF;
    border: 1px solid #667080;
    border-radius: 2px;

    &::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #667080;
        letter-spacing: -0.02em;
        font-feature-settings: 'calt' off;

        padding: 12px;
    }
}
</style>