<template>
  <section
    class="support__banner bg__img clear__top"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="container">
      <div class="support__banner__area">
        <div class="support__banner__inner">
          <h1 class="neutral-top">How can we help?</h1>

          <div class="input input--secondary">
            <input
              type="text"
              name="sear"
              id="sear_faq"
              placeholder="Search"
              v-model="searchTerm"
            />
          </div>

          <div class="faq__tab">
            <a
              v-for="(tab, index) in tabs"
              :key="index"
              :href="tab.href"
              class="faq__tab__btn"
              :class="{ faq__tab__btn__active: activeTab === tab.href }"
              @click.prevent="setActive(tab.href)"
            >
              {{ tab.label }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import bgImage from '@/assets/images/support-bg.png'

const searchTerm = ref('')
const activeTab = ref('#start')

const tabs = [
  { label: 'Getting Started', href: '#start' },
  { label: 'Adding Funds', href: '#funds' },
  { label: 'Investing', href: '#investing' },
  { label: 'Security', href: '#security' },
  { label: 'Taxes', href: '#taxes' },
]

function setActive(href) {
  activeTab.value = href
}
</script>

<style scoped>
/* Ajoute ici des styles personnalisés si nécessaire */
</style>