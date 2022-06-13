<template>
    <div class="footer">
        <div class="content">
            <div class="container">
                <div class="logo">
                    <img src="@/assets/images/LogoWhite.svg" alt="CACG">
                </div>
                <p class="number">+7 777 777 77 77</p>
                <p class="email" >cacg@gmail.com</p>
                <div class="social">
                    <social-button v-for="item in social" :key="item" :icon="item"></social-button>
                </div>
                <p class="footer_text">
                    &copy; CACG. {{ content.rights }}
                </p>
            </div>
            <div id="map" >

            </div>
        </div>
    </div>
</template>

<script>
import { footerText } from './TheFooter.js'
import { useLanguageStore } from '@/stores/language.js'
import SocialButton from './UI/SocialButton.vue'
import DG from '2gis-maps'

export default {

  components: { SocialButton },
  data() {
    return {
      content: footerText.RU,
      social: [ 'whatsapp', 'telegram', 'inst'],
      map: null
    }
  },
  setup() {
    const langStore = useLanguageStore()

    return { langStore }
  },
  mounted() {
    this.map = new DG.map(document.getElementById('map'),{
      'center': [51.13929738862349, 71.41946085138662],
      'zoom': 18
    })
    DG.marker([51.13929738862349, 71.41946085138662]).addTo(this.map);        
  },

  computed: {
    getLanguage() {
      return this.langStore.language
    }
  },

  watch: {
    getLanguage(newLang){
      this.content = footerText[newLang];
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    height: 620px;
    width: 100%;
    background: linear-gradient(144.4deg, #343434 14.59%, #34312B 84.28%);
  }
  p{
    color: white;
  }

  .logo {
    height: 150px;
  }

  .number {
    width: 256px;
    height: 36px;

    font-family: Gotham;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    

    letter-spacing: 0.1em;
  }

  .email {
    width: 245px;
    height: 36px;

    font-family: Gotham;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    

    letter-spacing: 0.12em;
  }

  .content{
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 120px 0;
  }

  .social {
    display: flex;
    padding-top: 30px;
    width: 176px;
    justify-content: space-between;
    padding-bottom: 50px;
  }

  .footer_text {
    width: 289px;
    height: 18px;

    font-family: FFDinPro;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;

  }

  #map {
    width: 510px;
    height: 306px;

  }
</style>