<template>
    <div id="app">
        <HeaderComponent />
         <BannerComponent :title="title" :backgroundImage="backgroundImage" :bannerThumb="bannerThumb"
      :breadcrumbs="breadcrumbs" />
        <FilterComponent/>
        <PropositionComponent />
        <FooterComponent />
    </div>
</template>

<script setup>

import { ref } from 'vue'

// Importing components
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import PropositionComponent from '@/components/PropositionComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FilterComponent from '@/components/FilterComponent.vue';


const backgroundImage = new URL('@/assets/images/banner/banner-bg.png', import.meta.url).href
// const bannerThumb = new URL('@/assets/images/banner/key-illustration.png', import.meta.url).href

const title = "Parcourir les colocations"


</script>
