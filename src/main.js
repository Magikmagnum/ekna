// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// i18n
import { createI18n } from 'vue-i18n'
import messages from './i18n/messages'

// PrimeVue + thème Aura
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

// Vue Final Modal
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

// CSS globaux
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/nice-select/css/nice-select.css'
import './assets/vendor/magnific-popup/css/magnific-popup.css'
import './assets/vendor/slick/css/slick.css'
import './assets/vendor/animate/animate.css'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// JS global
import './assets/js/main.js'

// Création instance i18n
const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages
})

// Création et montage de l'application
createApp(App)
  .use(router)
  .use(i18n)
  .use(createVfm())
  .use(PrimeVue, {
    theme: { preset: Aura }
  })
  .mount('#app')
