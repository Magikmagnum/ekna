<template>
  <div id="app">
    <HeaderComponent />
    <SearchComponent/>
    <AccordionComponent :title="'FAQ'" :items="accordionItems" />
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'
import AccordionComponent from '@/components/AccordionComponent.vue'

const iconMessage = new URL('@/assets/images/icons/message.png', import.meta.url).href

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
/* styles globaux éventuels */
</style>