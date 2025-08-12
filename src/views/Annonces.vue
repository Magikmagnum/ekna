<template>
    <div id="app">
        <HeaderComponent />
        <BannerComponent :title="title" :backgroundImage="backgroundImage" />
        <Proposition2Component :filters="filters" />
        <FooterComponent />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// Importing components
import HeaderComponent from '@/components/HeaderComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'
import Proposition2Component from '@/components/Proposition2Component.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const route = useRoute()

const backgroundImage = new URL('@/assets/images/banner-two-bg.png', import.meta.url).href
const title = "Parcourir les colocations"

// Filtres globaux
const filters = ref({
    search: route.query.search || '',
    location: route.query.location || '',
    propertyType: route.query.propertyType || '',
    sort: route.query.sort || 'plus_recent'
})


// 🔍 Met à jour les filtres quand l'URL change
watch(
    () => route.query,
    (newQuery) => {
        filters.value.search = newQuery.search || ''
        filters.value.location = newQuery.location || ''
        filters.value.propertyType = newQuery.propertyType || ''
    },
    { immediate: true } // exécute une première fois au montage
)
</script>
