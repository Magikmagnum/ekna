<template>
  <div id="app">
    <HeaderComponent />
    <BannerComponent :htmlTitle="title" :bannerThumb="bannerThumb" :backgroundImage="backgroundImage"/>
    <BannerSecondComponent />
    <StepTwoSectionComponent />
    <TestimonialsComponent />
    <Banner3Component title="Vous louez. Ekna s'occupe du reste." subtitle="Optimisez votre rentabilité et sécurisez vos locations en quelques clics." :imageSrc="imageSrc"/>
    <FooterComponent />
  </div>
</template>



<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import Banner3Component from '@/components/Banner3Component.vue'
import StepTwoSectionComponent from '@/components/StepTwoSectionComponent.vue'
import TestimonialsComponent from '@/components/TestimonialsComponent.vue'

// import BannerSecondComponent from '@/components/BannerSecondComponent.vue'

const backgroundImage = new URL('@/assets/images/banner/program-bg.png', import.meta.url).href
const bannerThumb = new URL('@/assets/images/banner/affi-thumb.png', import.meta.url).href

const title = "<div>Rejoignez</div> <div>l'espace</div> <div>bailleurs EKNA</div>"


const imageSrc = new URL('@/assets/images/market-illustration.png', import.meta.url).href
</script>

<style>
/* styles globaux éventuels */
</style>