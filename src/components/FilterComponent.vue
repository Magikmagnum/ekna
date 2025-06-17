<template>
  <div class="property__filter">
    <div class="container">
      <div class="property__filter__area">
        <div class="row d-flex align-items-center">

          <!-- Search Input -->
          <div class="col-lg-12 col-xl-6">
            <div class="property__search__wrapper">
              <form @submit.prevent="handleSearch">
                <div class="input">
                  <input type="search" v-model="search" placeholder="Search for properties" />
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <button type="submit" class="button button--effect">Search</button>
              </form>
            </div>
          </div>

          <!-- Location Dropdown -->
          <div class="col-lg-6 col-xl-3">
            <div class="property__select__wrapper">
              <select v-model="location" class="location__select" style="display: none;">
                <option v-for="loc in locations" :key="loc.value" :value="loc.value" :data-display="loc.label">
                  {{ loc.label }}
                </option>
              </select>

              <div
                class="nice-select location__select"
                :class="{ open: isOpen.location }"
                tabindex="0"
                @click="toggleDropdown('location')"
              >
                <span class="current">{{ currentLabel(locations, location) }}</span>
                <ul class="list" v-show="isOpen.location">
                  <li
                    v-for="loc in locations"
                    :key="loc.value"
                    :data-value="loc.value"
                    :data-display="loc.label"
                    :class="['option', { selected: loc.value === location, focus: loc.value === location }]"
                    @click.stop="selectOption('location', loc.value)"
                  >
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
                <option v-for="type in propertyTypes" :key="type.value" :value="type.value" :data-display="type.label">
                  {{ type.label }}
                </option>
              </select>

              <div
                class="nice-select property__select"
                :class="{ open: isOpen.propertyType }"
                tabindex="0"
                @click="toggleDropdown('propertyType')"
              >
                <span class="current">{{ currentLabel(propertyTypes, propertyType) }}</span>
                <ul class="list" v-show="isOpen.propertyType">
                  <li
                    v-for="type in propertyTypes"
                    :key="type.value"
                    :data-value="type.value"
                    :data-display="type.label"
                    :class="['option', { selected: type.value === propertyType, focus: type.value === propertyType }]"
                    @click.stop="selectOption('propertyType', type.value)"
                  >
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
import { ref } from 'vue'

// Form state
const search = ref('')
const location = ref('')
const propertyType = ref('')

// Dropdown options
const locations = ref([
  { value: '', label: 'Select Location' },
  { value: 'angeles', label: 'Los Angeles' },
  { value: 'francis', label: 'San Francisco, CA' },
  { value: 'weldon', label: 'The Weldon' },
  { value: 'diego', label: 'San Diego' }
])

const propertyTypes = ref([
  { value: '', label: 'Property Type' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'residential', label: 'Residential' }
])

// Open state for each dropdown
const isOpen = ref({
  location: false,
  propertyType: false
})

// Toggle dropdown visibility
const toggleDropdown = (key) => {
  isOpen.value[key] = !isOpen.value[key]
  // Fermer les autres
  for (const k in isOpen.value) {
    if (k !== key) isOpen.value[k] = false
  }
}

// Sélectionner une option et fermer le dropdown
const selectOption = (key, value) => {
  if (key === 'location') location.value = value
  if (key === 'propertyType') propertyType.value = value
  isOpen.value[key] = false
}

// Label courant affiché
const currentLabel = (list, selectedValue) => {
  return list.find((item) => item.value === selectedValue)?.label || list[0].label
}

// Search handler
const handleSearch = () => {
  console.log('Search:', search.value)
  console.log('Location:', location.value)
  console.log('Property Type:', propertyType.value)
}
</script>

<style scoped>
/* Optionnel : styles personnalisés pour override nice-select */
</style>