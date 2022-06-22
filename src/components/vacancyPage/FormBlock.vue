<template>
    <div class="container">
        <div>
            <div class="left">
                <p class="step">{{ content.step1.step }}</p>
                <p class="title">{{ content.step1.title }}</p>
                <p class="description">{{ content.step1.description }}</p>
            </div>
            <div class="right">
                <div class="line">
                    <div class="label-input">
                        <p>{{ content.name }}</p>
                        <vacancy-input />
                    </div>
                    <div class="label-input">
                        <p>{{ content.position }}</p>
                        <vacancy-input />
                    </div>
                </div>
                <div class="line">
                    <div class="label-input">
                        <p>{{ content.email }}</p>
                        <vacancy-input />
                    </div>
                    <div class="label-input">
                        <p>{{ content.phone }}</p>
                        <vacancy-input />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="left">
                <p class="step">{{ content.step2.step }}</p>
                <p class="title">{{ content.step2.title }}</p>
                <p class="description">{{ content.step2.description }}</p> 
            </div>
            <div class="right" style="gap: 26px">
                <p>{{ content.resume }}</p>
                <vacancy-textarea />
                <div class="line">
                    <div>{{ content.choose }}</div>
                    <p class="message">{{ content.message }}</p>
                </div>
            </div>
        </div>
        <main-button style="margin-top: 89px;">{{ content.buttonText }}</main-button>
    </div>
</template>

<script>
import VacancyInput from '../UI/VacancyInput.vue'
import VacancyTextarea from '../UI/VacancyTextarea.vue'
import MainButton from '../UI/MainButton.vue'
export default {
  components: { VacancyInput, VacancyTextarea, MainButton },
    props: {
        content: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    padding: 240px 0;
    background: linear-gradient(132.63deg, #FFFFFF 18.7%, #F2F1F1 84.53%);

    display: flex;
    flex-direction: column;
    align-items: center;

    &>div{
        width: 75%;
        margin: 0 auto;
        
        border-bottom: 2px solid #D3BFBF;
        padding-bottom: 91px;

        display: flex;
        justify-content: space-between;

        &:nth-child(2){
            padding-top: 91px;
        }
    }
}
.left {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 13px;

    &>.step{
        color: #50BE95;
        font-size: 24px;
    }
    &>.title{
        font-size: 32px;
    }
    &>.description{
        font-weight: 400;
        font-size: 24px;
        line-height: 22px;
    }
}
.right {
    width: 52.78%;

    display: flex;
    flex-direction: column;
    gap: 50px; 
    
    font-size: 24px;
}
.line{
    display: flex;
    justify-content: space-between;
}
.label-input{
    width: 45.3%;

    display: flex;
    flex-direction: column;
    gap: 13px;

   
}
p{
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.02em;
    font-feature-settings: 'calt' off;
}
.message{
    font-weight: 400;
    font-size: 24px;
    line-height: 22px;

    width: 74.34%;
}
</style>