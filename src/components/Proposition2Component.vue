<template>
    <section class="property__filter">
        <div class="container">
            <div class="property__filter__area">
                <div class="row d-flex align-items-center">
                    <!-- Search Input -->
                    <div class="col-lg-12 col-xl-6">
                        <div class="property__search__wrapper">
                            <form @submit.prevent="handleSearch">
                                <div class="input">
                                    <input type="search" v-model="search"
                                        :placeholder="t('FilterComponent.inputPlaceholder')" />
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <button type="submit" class="button button--effect">
                                    {{ t('FilterComponent.boutonRecherche') }}
                                </button>
                            </form>
                        </div>
                    </div>

                    <!-- Location Dropdown -->
                    <div class="col-lg-6 col-xl-3">
                        <div class="property__select__wrapper">
                            <div class="nice-select location__select"
                                :class="{ open: isOpen.location, disabled: isLoadingVilles }" tabindex="0"
                                @click="!isLoadingVilles && toggleDropdown('location')">
                                <span class="current">{{
                                    isLoadingVilles ? 'Chargement...' : currentLabel(locations, location)
                                    }}</span>
                                <ul class="list" v-show="isOpen.location && !isLoadingVilles">
                                    <li v-for="loc in locations" :key="loc.value"
                                        :class="['option', { selected: loc.value === location }]"
                                        @click.stop="selectOption('location', loc.value)">
                                        {{ loc.label }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Property Type Dropdown -->
                    <div class="col-lg-6 col-xl-3">
                        <div class="property__select__wrapper">
                            <div class="nice-select property__select" :class="{ open: isOpen.propertyType }"
                                tabindex="0" @click="toggleDropdown('propertyType')">
                                <span class="current">{{ currentLabel(propertyTypes, propertyType) }}</span>
                                <ul class="list" v-show="isOpen.propertyType">
                                    <li v-for="type in propertyTypes" :key="type.value"
                                        :class="['option', { selected: type.value === propertyType }]"
                                        @click.stop="selectOption('propertyType', type.value)">
                                        {{ type.label }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useI18n } from 'vue-i18n'
import CardVertical2Component from './CardVertical2Component.vue'

const { t } = useI18n()

// Form state
const search = ref('')
const location = ref('')
const propertyType = ref('')

// Dropdown options
const locations = ref([{ value: '', label: 'Ville' }])
const isLoadingVilles = ref(false)

const propertyTypes = ref([
    { value: '', label: 'Typologie' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'residential', label: 'Residential' },
    { value: 'appartement', label: 'Appartement' }
])

const isOpen = ref({
    location: false,
    propertyType: false
})

const toggleDropdown = (key) => {
    isOpen.value[key] = !isOpen.value[key]
    for (const k in isOpen.value) {
        if (k !== key) isOpen.value[k] = false
    }
}

const selectOption = (key, value) => {
    if (key === 'location') location.value = value
    if (key === 'propertyType') propertyType.value = value
    isOpen.value[key] = false
}

const currentLabel = (list, selectedValue) => {
    return list.find((item) => item.value === selectedValue)?.label || list[0].label
}

// Données logements
const properties = ref([])
const currentPage = ref(1)
const hasMore = ref(true)
const isLoading = ref(false)

const filters = ref({
    search: '',
    location: '',
    propertyType: ''
})

const handleSearch = () => {
    filters.value = {
        search: search.value,
        location: location.value,
        propertyType: propertyType.value
    }

    currentPage.value = 1
    hasMore.value = true
    properties.value = []
    loadProperties()
}

const loadProperties = async () => {
    if (isLoading.value || !hasMore.value) return

    isLoading.value = true

    try {
        const response = await axios.post(
            'https://mydevapi.espacebailleurekna.fr/api/v2/mobile/logements',
            {
                page: currentPage.value,
                ville: filters.value.location || '',
                type_logement: filters.value.propertyType || 'appartement'
            }
        )

        const annonces = response.data.result?.data || []
        if (annonces.length === 0) {
            hasMore.value = false
        } else {
            properties.value.push(
                ...annonces.map((annonce, index) => ({
                    id: annonce.id || `${currentPage.value}-${index}`,
                    title: annonce.ville || 'Ville inconnue',
                    address: `${annonce.adresse || ''} ${annonce.code_postal || ''}, ${annonce.ville || ''}`.trim(),
                    imageUrl: annonce.image || '/assets/images/default.jpg',
                    investors: annonce.loyer_hors_charge || 0,
                    progressPercent: annonce.avancement || 0,
                    chambres: annonce.total_chambre?.toString() || 'N.C.',
                    type: annonce.type_logement || 'N.C.',
                    detailsUrl: `/detail/${annonce.id || ''}`,
                    countdown: { days: '10', month: '08', years: '24' },
                    locataires: annonce.locataires || [],
                    proprietaire: annonce.proprietaire || {}
                }))
            )

            currentPage.value++
        }
    } catch (error) {
        console.error('Erreur lors du chargement des logements:', error)
    } finally {
        isLoading.value = false
    }
}

// Chargement des villes
const loadVilles = async () => {
    isLoadingVilles.value = true
    try {
        const response = await axios.get(
            'https://mydevapi.espacebailleurekna.fr/api/v2/mobile/users/zones/zones-recherches'
        )
        const result = response.data.result || []

        const villes = result
            .filter((item) => item.ville)
            .map((item) => ({
                value: item.ville.toLowerCase(),
                label: item.ville
            }))
            .sort((a, b) => a.label.localeCompare(b.label))

        locations.value = [{ value: '', label: 'Ville' }, ...villes]
    } catch (error) {
        console.error('Erreur lors du chargement des villes :', error)
    } finally {
        isLoadingVilles.value = false
    }
}

onMounted(() => {
    loadProperties()
    loadVilles()
})

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
.button span {
    color: #fff;
    font-weight: 600;
}

.property__filter {
    margin-bottom: 0px;
}

.nice-select.disabled {
    pointer-events: none;
    opacity: 0.6;
}

@media only screen and (max-width: 575px) {
    .property__filter {
        padding-top: 42px;
    }
}
</style>