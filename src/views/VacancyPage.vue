<template>
    <div class="main">
        <the-after-header :content="content.title"/>
        <info-block :content="content.infoBlock" />
        <form-block :content="content.formBlock"/>
    </div>
</template>

<script>
import { vacancyPageText } from './VacancyPage'
import TheAfterHeader from '@/components/TheAfterHeader.vue'
import InfoBlock from '@/components/InfoBlock.vue'
import FormBlock from '@/components/vacancyPage/FormBlock.vue'

export default {
    components: { TheAfterHeader, InfoBlock, FormBlock },

    data() {
        return {
            content: vacancyPageText.RU,
        }
    }

}
</script>

<style>

</style>