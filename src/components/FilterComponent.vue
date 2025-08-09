<template>
    <div class="property__filter">
        <div class="container">
            <div class="property__filter__area">
                <div class="row d-flex align-items-center">

                    <!-- Search Input -->
                    <div class="col-lg-12 col-xl-6">
                        <div class="property__search__wrapper">
                            <form @submit.prevent="handleSearch">
                                <div class="input" style="position: relative;">
                                    <input type="search" :value="filters.search"
                                        :placeholder="t('FilterComponent.inputPlaceholder')" @input="onSearchInput"
                                        @focus="onFocusSearch" @blur="onBlurAutocomplete" autocomplete="off" />
                                    <i class="fa-solid fa-magnifying-glass"></i>

                                    <ul v-if="showAutocomplete && filteredVilles.length" class="autocomplete-list"
                                        tabindex="0" @mousedown.prevent>
                                        <li v-for="ville in filteredVilles" :key="ville.value"
                                            @click="selectVille(ville)" class="autocomplete-item">
                                            {{ ville.label }}
                                        </li>
                                    </ul>
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
                            <select v-model="filters.location" class="location__select" style="display: none;">
                                <option v-for="loc in locations" :key="loc.value" :value="loc.value"
                                    :data-display="loc.label">
                                    {{ loc.label }}
                                </option>
                            </select>

                            <div class="nice-select location__select" :class="{ open: isOpen.location }" tabindex="0"
                                @click="toggleDropdown('location')">
                                <span class="current">{{ currentLabel(locations, filters.location) }}</span>
                                <ul class="list" v-show="isOpen.location">
                                    <li v-for="loc in locations" :key="loc.value" :data-value="loc.value"
                                        :data-display="loc.label"
                                        :class="['option', { selected: loc.value === filters.location, focus: loc.value === filters.location }]"
                                        @click.stop="onSelectLocation(loc)">
                                        {{ loc.label }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Property Type Dropdown -->
                    <div class="col-lg-6 col-xl-3">
                        <div class="property__select__wrapper">
                            <select v-model="filters.propertyType" class="property__select" style="display: none;">
                                <option v-for="type in propertyTypes" :key="type.value" :value="type.value"
                                    :data-display="type.label">
                                    {{ type.label }}
                                </option>
                            </select>
                            <div class="nice-select property__select" :class="{ open: isOpen.propertyType }"
                                tabindex="0" @click="toggleDropdown('propertyType')">
                                <span class="current">{{ currentLabel(propertyTypes, filters.propertyType) }}</span>
                                <ul class="list" v-show="isOpen.propertyType">
                                    <li v-for="type in propertyTypes" :key="type.value" :data-value="type.value"
                                        :data-display="type.label"
                                        :class="['option', { selected: type.value === filters.propertyType, focus: type.value === filters.propertyType }]"
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
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { fetchVilles } from '@/services/villesMapper'
import { typeLogements } from '@/services/typeLogementsMapper'
import { useRouter } from 'vue-router'

const props = defineProps({
    filters: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['update:filters'])

const router = useRouter()
const { t } = useI18n()

const locations = ref([{ value: '', label: 'Ville' }])
const propertyTypes = ref(typeLogements)

const isOpen = ref({
    location: false,
    propertyType: false
})

/* Autocomplete state */
const showAutocomplete = ref(false)
const filteredVilles = ref([])

/* Load villes */
const loadVilles = async () => {
    locations.value = await fetchVilles()
    filteredVilles.value = locations.value.filter(v => v.value !== '')
}

onMounted(() => {
    loadVilles()
})

/* Watch search changes to filter autocomplete */
watch(() => props.filters.search, (newVal) => {
    filterVilles(newVal)
})

/* Called on input focus */
const onFocusSearch = () => {
    showAutocomplete.value = true
    if (!props.filters.search.trim()) {
        filteredVilles.value = locations.value.filter(v => v.value !== '')
    }
}

/* Filter list as user types */
const filterVilles = (termRaw = '') => {
    const term = (termRaw || props.filters.search || '').trim().toLowerCase()
    showAutocomplete.value = true

    if (!term) {
        filteredVilles.value = locations.value.filter(v => v.value !== '')
        return
    }

    filteredVilles.value = locations.value.filter(
        ville => ville.value !== '' && ville.label.toLowerCase().includes(term)
    )
}

/* Hide autocomplete on blur (delay to allow click) */
const onBlurAutocomplete = () => {
    setTimeout(() => {
        showAutocomplete.value = false
    }, 150)
}

/* Emit updated filters when input changes */
const onSearchInput = (event) => {
    emit('update:filters', { ...props.filters, search: event.target.value })
}

/* When user clicks an item in autocomplete */
const selectVille = (ville) => {
    emit('update:filters', { ...props.filters, search: ville.label, location: ville.value })
    showAutocomplete.value = false
    filteredVilles.value = locations.value.filter(v => v.value !== '')
}

/* When user selects from the location dropdown we sync the search too */
const onSelectLocation = (loc) => {
    emit('update:filters', { ...props.filters, location: loc.value, search: loc.label })
    isOpen.value.location = false
    filteredVilles.value = locations.value.filter(v => v.value !== '')
}

/* generic dropdown helpers */
const toggleDropdown = (key) => {
    isOpen.value[key] = !isOpen.value[key]
    for (const k in isOpen.value) if (k !== key) isOpen.value[k] = false
}

const selectOption = (key, value) => {
    if (key === 'propertyType') {
        emit('update:filters', { ...props.filters, propertyType: value })
    }
    isOpen.value[key] = false
}

/* Display current label */
const currentLabel = (list, selectedValue) => {
    return list.find(item => item.value === selectedValue)?.label || list[0].label
}

/* Search submit */
const handleSearch = () => {
    router.push({
        path: '/annonces',
        query: {
            search: props.filters.search || '',
            location: props.filters.location || '',
            propertyType: props.filters.propertyType || ''
        }
    })
}
</script>

<style scoped>
@media only screen and (max-width: 575px) {
    .property__filter {
        padding-top: 42px;
    }
}

.property__filter__area form button {
    width: auto;
}

.autocomplete-list {
    position: absolute;
    z-index: 10;
    background: white;
    border: 1px solid #ccc;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 2px;
    list-style: none;
    padding-left: 0;
    border-radius: 4px;
}

.autocomplete-item {
    padding: 8px 12px;
    cursor: pointer;
}

.autocomplete-item:hover {
    background-color: #eee;
}
</style>
