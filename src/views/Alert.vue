<template>
  <div id="app">
    <HeaderComponent />
    <BannerComponent :title="title" :backgroundImage="backgroundImage" />
    <AlertFormComponent />
    <FooterComponent />
  </div>
</template>



<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import AlertFormComponent from '@/components/AlertFormComponent.vue'

const backgroundImage = new URL('@/assets/images/banner/banner-bg.png', import.meta.url).href
const title = "Alerte colocation"

</script>

<style>
/* styles globaux éventuels */
</style>
