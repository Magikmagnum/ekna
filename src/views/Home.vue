<template>
  <div id="app">
    <HeaderComponent />
    <BannerComponent :title="title" :bannerThumb="bannerThumb" :backgroundImage="backgroundImage"
      :breadcrumbs="breadcrumbs" />
    <BannerSecondComponent />
    <StepTwoSectionComponent />
    <TestimonialsComponent />
    <FooterComponent />
  </div>
</template>



<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import BannerSecondComponent from '@/components/BannerSecondComponent.vue'
import StepTwoSectionComponent from '@/components/StepTwoSectionComponent.vue'
import TestimonialsComponent from '@/components/TestimonialsComponent.vue'


const backgroundImage = new URL('@/assets/images/banner/program-bg.png', import.meta.url).href
const bannerThumb = new URL('@/assets/images/banner/affi-thumb.png', import.meta.url).href

const title = "Affiliate Program"

const breadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Pages', path: '/coucou' },
  { label: 'Affiliate Program', path: '/coucou/papa' }
]
</script>

<style>
/* styles globaux éventuels */
</style>