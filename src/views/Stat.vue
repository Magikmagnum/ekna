<template>
  <div id="app">
    <HeaderComponent />
    <HeroListComponent />
    <StatComponent :items="stats" />
    <PropertyComponent headingSmall="Your success is our success." headingLarge="Why sell through Revest?"
      description="Revest enables real estate owners to sell their properties through its platform. Submit your property quickly and easily!"
      learnMoreLink="contact-us.html" learnMoreLabel="Let us know about your property" ctaLink="login.html"
      ctaLabel="Submit Your Property" :leftItems="leftItems" :rightItems="rightItems" />
    <ProcessComponent :steps="steps" />
    <AccordionComponent :title="'FAQ'" :items="accordionItems" />
    <TestimonialsComponent />
    <BannerSecondComponent title="Vous louez. Ekna s'occupe du reste." subtitle="Optimisez votre mobilité" :imageSrc="imageSrc"/>
    <FooterComponent />
  </div>
</template>


<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import PropertyComponent from '@/components/PropertyComponent.vue'
import HeroListComponent from '@/components/HeroListComponent.vue'
import StatComponent from '@/components/StatComponent.vue'
import ProcessComponent from '@/components/ProcessComponent.vue'
import TestimonialsComponent from '@/components/TestimonialsComponent.vue'
import AccordionComponent from '@/components/AccordionComponent.vue'
import BannerSecondComponent from '@/components/BannerSecondComponent.vue'

const successs = new URL('@/assets/images/icons/successs.png', import.meta.url).href
const served = new URL('@/assets/images/icons/served.png', import.meta.url).href
const exp = new URL('@/assets/images/icons/exp.png', import.meta.url).href

const iconMessage = new URL('@/assets/images/icons/message.png', import.meta.url).href


const attractive = new URL('@/assets/images/icons/attractive.png', import.meta.url).href
const fast = new URL('@/assets/images/icons/fast.png', import.meta.url).href
const innovation = new URL('@/assets/images/icons/innovation.png', import.meta.url).href

const imageSrc = new URL('@/assets/images/market-illustration.png', import.meta.url).href

const stats = [
  {
    icon: successs,
    alt: 'Success',
    count: 1000,
    suffix: '+',
    title: 'Successful High-Value Transactions',
  },
  {
    icon: served,
    alt: 'served',
    count: 5000,
    suffix: '+',
    title: 'Number of clients served',
  },
  {
    icon: exp,
    alt: 'experience',
    count: 45,
    suffix: ' Year+',
    title: 'Real estate investment experience',
  },
]


const leftItems = [
  {
    icon: attractive,
    alt: 'Attractive',
    title: 'Attractive conditions',
    description: 'With us you sell your property without paying a brokerage commission.',
  },
  {
    icon: fast,
    alt: 'Fast',
    title: 'Fast processing',
    description: 'Receive an initial offer and a property assessment within 48 hours.',
  },
]

const rightItems = [
  {
    icon: innovation,
    alt: 'Innovation',
    title: 'Innovation',
    description: 'Sell your property online through an innovative business model.',
  },
]

const steps = [
  {
    id: 1,
    title: 'Fill out the online form',
    description:
      'Answer a few questions and attach a summary file to help us evaluate your property.',
  },
  {
    id: 2,
    title: 'Analysis of the property',
    description:
      'Answer a few questions and attach a summary file to help us evaluate your property.',
  },
  {
    id: 3,
    title: 'Receive a first offer',
    description:
      'Answer a few questions and attach a summary file to help us evaluate your property.',
  },
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
