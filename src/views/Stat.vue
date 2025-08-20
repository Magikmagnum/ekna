<template>
  <div id="app">
    <HeaderComponent />
    <HeroListComponent />
    <StatComponent :items="stats" />
    <PropertyComponent headingSmall="Plus qu'une plateforme, un véritable outil de sélection."
      headingLarge="Pourquoi choisir EKNA pour ta colocation ?"
      description="La première application qui sélectionne des colocations compatibles avec ta personnalité, ton budget et ton mode de vie."
      ctaLink="login.html" ctaLabel="Commencer ma recherche" :leftItems="leftItems" :rightItems="rightItems" />
    <ProcessComponent :steps="steps" />
    <AccordionComponent :title="'FAQ'" :items="accordionItems" />
    <TestimonialsComponent />
    <BannerSecondComponent title="Vous louez. Ekna s'occupe du reste." subtitle="Optimisez votre mobilité"
      :imageSrc="imageSrc" />
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
const scoring = new URL('@/assets/images/icons/statscoring.png', import.meta.url).href
const matching = new URL('@/assets/images/icons/statmatching.png', import.meta.url).href

const imageSrc = new URL('@/assets/images/market-illustration.png', import.meta.url).href

const stats = [
  {
    icon: successs,
    alt: 'Success',
    count: 73,
    suffix: '%',
    title: "trouvent une colocation en moins d'une semaine grâce au matching EKNA",
  },
  {
    icon: served,
    alt: 'served',
    count: 50,
    suffix: '+',
    title: 'colocations actives chaque mois partout en France',
  },
  {
    icon: exp,
    alt: 'experience',
    count: 95,
    suffix: '%',
    title: 'de satisfaction sur la compatibilité entre colocataires',
  },
]


const leftItems = [
  {
    icon: scoring,
    alt: 'Scoring',
    title: 'Scoring intelligent',
    description: "Trouve des logements adaptés à ton profil (budget, garanties, situation, durée).",
  },
  {
    icon: matching,
    alt: 'Matching',
    title: 'Matching relationnel',
    description: 'Tu matches avec des colocataires qui te ressemblent.',
  },
]

const rightItems = [
  {
    icon: attractive,
    alt: 'Attractive',
    title: 'Moins de galères',
    description: "Fini les visites inutiles, les arnaques et les expériences mal choisies.",
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
