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
                        <vacancy-input v-model="name" />
                    </div>
                    <div class="label-input">
                        <p>{{ content.position }}</p>
                        <vacancy-input v-model="position" />
                    </div>
                </div>
                <div class="line">
                    <div class="label-input">
                        <p>{{ content.email }}</p>
                        <vacancy-input v-model="email" />
                    </div>
                    <div class="label-input">
                        <p>{{ content.phone }}</p>
                        <vacancy-input v-model="phone" />
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
                <vacancy-textarea v-model="message"/>
                <div class="line">
                    <label class="input-file">
                        <input type="file" @change="onFileChange($event)" />
                        {{ content.choose }}
                    </label>
                    <p class="message">{{ content.message }}</p>
                </div>
            </div>
        </div>
        <p v-if="error" class="error" :class="{good: !isError}">{{ error }}</p>
        <main-button style="margin-top: 89px;" @click="onSubmit()">{{ content.buttonText }}</main-button>
    </div>
</template>

<script>
/* eslint-disable */
import VacancyInput from '../UI/VacancyInput.vue'
import VacancyTextarea from '../UI/VacancyTextarea.vue'
import MainButton from '../UI/MainButton.vue'
import VacancyService from '../../services/vacancy.service.js'

const vacancyService = new VacancyService();

export default {
  components: { VacancyInput, VacancyTextarea, MainButton },
    props: {
        content: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            name: '',
            position: '',
            email: '',
            phone: '',
            message: '',
            file: '',
            error: '',
            isError: false,
        }
    },
    methods: {
        onFileChange(event) {
            this.file = event.target.files[0];
        },
        sendResume() {
            let title = this.name + ' ' + this.position;
            let content = 'Email: ' + this.email + '\n' + 'Телефон: ' + this.phone + '\n' + 'Сопроводительное письмо: ' + this.message;
            vacancyService.sendEmail(title, content, this.file);
        },
        checkData() {
            if (this.name && this.position && this.email && this.phone) {
                return true;
            } else {
                return false;
            }
        },
        isEmailCorrect() {
            let email = this.email;
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        isPhoneCorrect() {
            let phone = this.phone;
            let re = /^\+?[0-9]{10,15}$/;
            return re.test(String(phone));
        },
        onSubmit(){
            if (this.checkData() && this.isEmailCorrect() && this.isPhoneCorrect()) {
                this.sendResume();
                this.reset();
                this.error = this.content.error[1];
                this.isError = false;
            } else {
                this.error = this.content.error[0];
                this.isError = true;
            }
        },
        reset(){
            this.name = '';
            this.position = '';
            this.email = '';
            this.phone = '';
            this.message = '';
            this.file = '';
            this.error = '';
        }
    },

    watch: {
        error(newVal){
            if(newVal!=''){
                setTimeout(() => {
                this.error = '';
                }, 4000);
            }
        }
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
input[type="file"] {
    display: none;
}
.input-file{
    width: 162px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #EEF1F4;
    border-radius: 6px;

    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    letter-spacing: -0.02em;
    font-feature-settings: 'calt' off;

    color: #667080;

    cursor: pointer;
}
.error {
    top: 50px;
    position: relative;
    color: red;
}
.good {
    color: green;
}
</style>