<template>
  <div class="container-filter">
    <FilterComponent v-model:filters="filters" />
  </div>

  <!-- Résultats -->
  <section style="margin-bottom: 100px;">
    <div class="container">
      <div class="properties__grid__area wow fadeInUp">
        <div v-for="(chunk, index) in chunkedProperties" :key="index" class="property__grid__wrapper">
          <div class="row">
            <CardVertical2Component v-for="(property, idx) in chunk" :key="property.id" v-bind="property" />
          </div>
        </div>

        <div class="text-center mt-4" v-if="hasMore">
          <button @click="loadProperties" :disabled="isLoading" class="button button--effect">
            <span v-if="!isLoading">Voir plus</span>
            <span v-else>Chargement...</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchProperties } from '@/services/logementsService'
import FilterComponent from './FilterComponent.vue'
import CardVertical2Component from './CardVertical2Component.vue'

const route = useRoute()
const router = useRouter()

// Filtres réactifs, initialisés depuis URL
const filters = ref({
  search: route.query.search || '',
  location: route.query.location || '',
  propertyType: route.query.propertyType || ''
})

const properties = ref([])
const currentPage = ref(1)
const hasMore = ref(true)
const isLoading = ref(false)

// Charger les logements via le service
const loadProperties = async () => {
  if (isLoading.value || !hasMore.value) return
  isLoading.value = true

  try {
    const { properties: newProperties, hasMore: more } = await fetchProperties(filters.value, currentPage.value)

    if (!more) hasMore.value = false
    else {
      properties.value.push(...newProperties)
      currentPage.value++
    }
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

// Mise à jour URL quand filtres changent (debounced possible selon besoin)
watch(filters, (newFilters) => {
  router.push({ path: '/annonces', query: { ...newFilters } })
  // Reset pagination + propriétés
  properties.value = []
  currentPage.value = 1
  hasMore.value = true
  loadProperties()
}, { deep: true })

// Quand l'URL change (ex. back/forward navigation), on sync les filtres
watch(() => route.query, (newQuery) => {
  filters.value = {
    search: newQuery.search || '',
    location: newQuery.location || '',
    propertyType: newQuery.propertyType || ''
  }
  properties.value = []
  currentPage.value = 1
  hasMore.value = true
  loadProperties()
}, { immediate: true })

// Découpage en chunk pour affichage 3 par ligne
function chunkArray(array, size) {
  const chunks = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}
const chunkedProperties = computed(() => chunkArray(properties.value, 3))
</script>

<style scoped>
.container-filter {
  margin-bottom: 92px;
}
</style>
