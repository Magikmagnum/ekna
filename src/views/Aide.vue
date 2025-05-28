<template>
  <div id="app">
    <HeaderComponent />
    <BannerComponent :title="title" :backgroundImage="backgroundImage" subtitle="Got a question?" variant="support" />
    <OverviewComponent title="Une demande ?" :items="contactItems" />
    <FormComponent title="Une demande ?" />
    <AccordionComponent :title="'FAQ'" :items="accordionItems" />
    <FooterComponent />
  </div>
</template>



<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import FormComponent from '@/components/FormComponent.vue'
import AccordionComponent from '@/components/AccordionComponent.vue'
import OverviewComponent from '@/components/OverviewComponent.vue'

const backgroundImage = new URL('@/assets/images/contact-banner-bg.png', import.meta.url).href
const iconEmail = new URL('@/assets/images/icons/email.png', import.meta.url).href
const iconPhone = new URL('@/assets/images/icons/phone.png', import.meta.url).href
const iconChat = new URL('@/assets/images/icons/chat.png', import.meta.url).href
const iconMessage = new URL('@/assets/images/icons/message.png', import.meta.url).href

const title = "Besoin d'aide"

const contactItems = [
  {
    icon: iconEmail,
    alt: 'email',
    title: 'Send Us an Email',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    link: 'mailto:contact@revest.com',
    linkLabel: 'contact@revest.com'
  },
  {
    icon: iconPhone,
    alt: 'Call',
    title: 'Give Us a Call',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    link: 'tel:+17087362094',
    linkLabel: '(414) 807 - 7478'
  },
  {
    icon: iconChat,
    alt: 'Chat',
    title: 'Chat with us',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    link: '#0',
    linkLabel: 'Open live chat'
  }
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
/* styles globaux éventuels */
</style>
