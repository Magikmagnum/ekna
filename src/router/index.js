// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importation des vues
import Home from '../views/Home.vue'
import Aide from '../views/Aide.vue'
import Careers from '../views/Careers.vue'
import Cookie from '../views/Cookie.vue'
import Privacy from '../views/Privacy.vue'
import Terme from '../views/Terme.vue'
import Stat from '../views/Stat.vue'
import Error from '../views/Error.vue'
import Support from '../views/Support.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/aide', name: 'Aide', component: Aide },
  { path: '/careers', name: 'Careers', component: Careers },
  { path: '/cookie', name: 'Cookie', component: Cookie },
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/terme', name: 'Terme', component: Terme },
  { path: '/stat', name: 'Stat', component: Stat },
  { path: '/home', name: 'Home', component: Home },
  { path: '/error', name: 'Error', component: Error },
  { path: '/support', name: 'Support', component: Support },
  // Ajouter ici d'autres routes si nécessaires
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router