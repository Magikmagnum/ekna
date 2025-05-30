<template>
  <div id="app">
    <HeaderComponent />
    <SearchComponent
      title="How can we help?"
      :tabs="tabs"
      defaultTab="#start"
      :bgImage="bgImage"
    />
    <AccordionComponent
      title="FAQ"
      :items="accordionItems"
    />
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import AccordionComponent from '@/components/AccordionComponent.vue'

const bgImage = new URL('@/assets/images/support-bg.png', import.meta.url).href
const iconMessage = new URL('@/assets/images/icons/message.png', import.meta.url).href

const tabs = [
  { label: 'Getting Started', href: '#start' },
  { label: 'Adding Funds', href: '#funds' },
  { label: 'Investing', href: '#investing' },
  { label: 'Security', href: '#security' },
  { label: 'Taxes', href: '#taxes' },
]

const accordionItems = [
  {
    icon: iconMessage,
    alt: 'Fund',
    question: 'What is Revest?',
    answer: 'Revest is a platform that...'
  },
  {
    icon: iconMessage,
    alt: 'Fund',
    question: 'What are the benefits?',
    answer: 'You get transparency, control and more...'
  }
]
</script>

<style>
/* Ajoute ici tes styles globaux si besoin */
</style>