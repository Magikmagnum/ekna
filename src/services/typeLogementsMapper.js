// src/services/propertyTypesService.js

import { ref } from 'vue'

export const typeLogements = ref([
  { value: '', label: 'Tous' }, // option "tout sélectionner"
  { value: 'appartement', label: 'Appartement' },
  { value: 'maison', label: 'Maison' }
])