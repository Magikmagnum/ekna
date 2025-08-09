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
                                    <input type="search" v-model="search"
                                        :placeholder="t('FilterComponent.inputPlaceholder')" @focus="onFocusSearch"
                                        @blur="onBlurAutocomplete" @input="filterVilles" autocomplete="off" />
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
                            <select v-model="location" class="location__select" style="display: none;">
                                <option v-for="loc in locations" :key="loc.value" :value="loc.value"
                                    :data-display="loc.label">
                                    {{ loc.label }}
                                </option>
                            </select>

                            <div class="nice-select location__select" :class="{ open: isOpen.location }" tabindex="0"
                                @click="toggleDropdown('location')">
                                <span class="current">{{ currentLabel(locations, location) }}</span>
                                <ul class="list" v-show="isOpen.location">
                                    <li v-for="loc in locations" :key="loc.value" :data-value="loc.value"
                                        :data-display="loc.label"
                                        :class="['option', { selected: loc.value === location, focus: loc.value === location }]"
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
                            <select v-model="propertyType" class="property__select" style="display: none;">
                                <option v-for="type in propertyTypes" :key="type.value" :value="type.value"
                                    :data-display="type.label">
                                    {{ type.label }}
                                </option>
                            </select>
                            <div class="nice-select property__select" :class="{ open: isOpen.propertyType }"
                                tabindex="0" @click="toggleDropdown('propertyType')">
                                <span class="current">{{ currentLabel(propertyTypes, propertyType) }}</span>
                                <ul class="list" v-show="isOpen.propertyType">
                                    <li v-for="type in propertyTypes" :key="type.value" :data-value="type.value"
                                        :data-display="type.label"
                                        :class="['option', { selected: type.value === propertyType, focus: type.value === propertyType }]"
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
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { fetchVilles } from '@/services/villesMapper'
import { typeLogements } from '@/services/typeLogementsMapper'
import { useRouter } from 'vue-router'

const router = useRouter()

const { t } = useI18n()

const search = ref('')
const location = ref('')
const propertyType = ref('')

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
    // initial filtered list = toutes les villes (hors placeholder)
    filteredVilles.value = locations.value.filter(v => v.value !== '')
}

onMounted(() => {
    loadVilles()
})

/* Called on input focus */
const onFocusSearch = () => {
    showAutocomplete.value = true
    // show all villes when focusing and no search text
    if (!search.value.trim()) {
        filteredVilles.value = locations.value.filter(v => v.value !== '')
    }
}

/* Filter list as user types.
   Important: always set showAutocomplete = true so typing re-opens suggestions,
   même si un select a été choisi auparavant. */
const filterVilles = () => {
    const term = (search.value || '').trim().toLowerCase()
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

/* When user clicks an item in autocomplete */
const selectVille = (ville) => {
    search.value = ville.label
    location.value = ville.value
    showAutocomplete.value = false
    // restore filtered list so next typing works
    filteredVilles.value = locations.value.filter(v => v.value !== '')
}

/* When user selects from the location dropdown we sync the search too:
   this guarantees that if the select isn't the placeholder, the autocomplete
   will still function on subsequent edits. */
const onSelectLocation = (loc) => {
    // set location + sync search to the label so user can continue editing
    location.value = loc.value
    search.value = loc.label
    isOpen.value.location = false
    // make sure autocomplete suggestions are available if user focuses/touches search
    filteredVilles.value = locations.value.filter(v => v.value !== '')
}

/* generic dropdown helpers */
const toggleDropdown = (key) => {
    isOpen.value[key] = !isOpen.value[key]
    for (const k in isOpen.value) if (k !== key) isOpen.value[k] = false
}

const selectOption = (key, value) => {
    if (key === 'location') location.value = value
    if (key === 'propertyType') propertyType.value = value
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
      search: search.value || '',
      location: location.value || '',
      propertyType: propertyType.value || ''
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
