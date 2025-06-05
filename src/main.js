// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from './i18n/messages'

const i18n = createI18n({
  locale: 'en', // ou 'en'
  fallbackLocale: 'en',
  messages
})

// CSS globaux
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/nice-select/css/nice-select.css'
import './assets/vendor/magnific-popup/css/magnific-popup.css'
import './assets/vendor/slick/css/slick.css'
import './assets/vendor/animate/animate.css'
import './assets/css/style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App).use(router).use(i18n).mount('#app')