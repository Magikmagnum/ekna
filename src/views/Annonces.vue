<template>
    <div id="app">
        <HeaderComponent />
        <BannerComponent :title="title" :backgroundImage="backgroundImage" :bannerThumb="bannerThumb"
            :breadcrumbs="breadcrumbs" />
        <!-- Composant de filtre -->
        <!-- <FilterComponent @update:filters="onFiltersUpdate" /> -->
        <!-- Composant de résultats, avec les filtres en props -->
        <Proposition2Component :filters="filters" />

        <FooterComponent />
    </div>
</template>

<script setup>

import { ref } from 'vue'

// Importing components
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import Proposition2Component from '@/components/Proposition2Component.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import FilterComponent from '@/components/FilterComponent.vue';



const backgroundImage = new URL('@/assets/images/banner/banner-bg.png', import.meta.url).href
// const bannerThumb = new URL('@/assets/images/banner/key-illustration.png', import.meta.url).href

const title = "Parcourir les colocations"

// Filtres globaux
const filters = ref({
  search: '',
  location: '',
  propertyType: ''
})

// Méthode appelée quand le formulaire de filtre est soumis
const onFiltersUpdate = (newFilters) => {
  filters.value = { ...newFilters }
}


</script>
