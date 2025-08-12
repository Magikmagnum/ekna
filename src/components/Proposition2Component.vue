<template>
  <div class="container-filter">
    <FilterComponent v-model:filters="filters" />
  </div>

  <section style="margin-bottom: 100px;">
    <div class="container">
      <div class="properties__grid__area wow fadeInUp">

        <div v-if="!isLoading && properties.length === 0" class="no-results-message">
          {{ $t('Proposition2Component.noResultsMessage') }}
        </div>

        <div v-else>
          <div class="title__with__cta" v-if="!isLoading && properties.length > 0">
            <div class="row d-flex align-items-center">
              <div class="col-lg-8">
                <h2>
                  {{ $t('Proposition2Component.title1') }}
                  {{ properties.length }}
                  {{ $t('Proposition2Component.title2') }}
                </h2>
              </div>
              <div class="col-lg-4">
                <!-- v-model sur filters.sort -->
                <SortDropdown v-model="filters.sort" :options="[
                  { value: 'plus_recent', label: 'le plus récent' },
                  { value: 'plus_ancien', label: 'le plus ancien' },
                  { value: 'loyer_decroissant', label: 'loyer décroissant' },
                  { value: 'loyer_croissant', label: 'loyer croissant' }
                ]" />
              </div>
            </div>
          </div>

          <div v-for="(chunk, index) in chunkedProperties" :key="index" class="property__grid__wrapper">
            <div class="row">
              <CardVertical2Component v-for="property in chunk" :key="property.id" v-bind="property" />
            </div>
          </div>

          <div class="text-center mt-4" v-if="hasMore">
            <button @click="loadProperties" :disabled="isLoading" class="button button--effect">
              <span v-if="!isLoading">{{ $t('Proposition2Component.voirPlus') }}</span>
              <span v-else>{{ $t('Proposition2Component.chargement') }}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchProperties } from '@/services/logementsService'
import FilterComponent from './FilterComponent.vue'
import CardVertical2Component from './CardVertical2Component.vue'
import SortDropdown from './SortDropdown.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

// On ne récupère plus props.filters (inutile ici)
  
// filters avec propriété "sort" (string) initialisée à 'plus_recent' par défaut
const filters = ref({
  search: route.query.search || '',
  location: route.query.location || '',
  propertyType: route.query.propertyType || '',
  sort: route.query.sort || 'plus_recent'  // IMPORTANT : valeur par défaut
})

const properties = ref([])
const currentPage = ref(1)
const hasMore = ref(true)
const isLoading = ref(false)

// computed pour créer l'objet avec les booléens de tri
const activeFilters = computed(() => {
  return {
    // une seule vraie selon filters.sort
    plus_recent: filters.value.sort === 'plus_recent',
    plus_ancien: filters.value.sort === 'plus_ancien',
    loyer_decroissant: filters.value.sort === 'loyer_decroissant',
    loyer_croissant: filters.value.sort === 'loyer_croissant',
    // autres filtres conservés tels quels
    search: filters.value.search,
    location: filters.value.location,
    propertyType: filters.value.propertyType
  }
})

const loadProperties = async () => {
  if (isLoading.value || !hasMore.value) return
  isLoading.value = true

  try {
    // On utilise activeFilters.value (avec les booléens de tri)
    const filtersToSend = { ...activeFilters.value }
    if (!filtersToSend.propertyType) delete filtersToSend.propertyType

    const { properties: newProperties, hasMore: more } = await fetchProperties(filtersToSend, currentPage.value)

    properties.value.push(...newProperties)
    hasMore.value = more
    if (more) currentPage.value++
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

// Quand filtres changent → mise à jour URL
watch(filters, (newFilters) => {
  router.push({ path: '/annonces', query: { ...newFilters } })
}, { deep: true })

// Quand URL change → recharge données
watch(() => route.query, (newQuery) => {
  filters.value = {
    search: newQuery.search || '',
    location: newQuery.location || '',
    propertyType: newQuery.propertyType || '',
    sort: newQuery.sort || 'plus_recent'  // bien récupérer le tri dans l'URL
  }
  properties.value = []
  currentPage.value = 1
  hasMore.value = true
  loadProperties()
}, { immediate: true })

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

.button span {
  color: #fff;
  font-weight: 600;
}

.no-results-message {
  padding: 24px;
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}

.title__with__cta {
  margin-bottom: 72px;
}
</style>
