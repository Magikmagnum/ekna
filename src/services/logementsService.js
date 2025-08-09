import axios from 'axios'
import { mapApiAnnonceToProperty } from '@/services/annonceMapper'

/**
 * Charge les logements avec filtres et pagination
 * @param {Object} filters - { search, location, propertyType }
 * @param {number} page - numéro de page à charger (1-based)
 * @returns {Promise<{properties: Array, hasMore: boolean}>}
 */
export async function fetchProperties(filters, page = 1) {
  try {
    const postData = {
      page,
      search: filters.search || '',
      ville: filters.location || ''
    }

    // Vérifie si propertyType est défini, non vide et différent de l'option "tout"
    if (
      filters.propertyType &&
      !(typeof filters.propertyType === 'object' && filters.propertyType.value === '') &&
      filters.propertyType !== ''
    ) {
      postData.type_logement = typeof filters.propertyType === 'object'
        ? filters.propertyType.value
        : filters.propertyType
    }

    const response = await axios.post(
      'https://mydevapi.espacebailleurekna.fr/api/v2/mobile/logements',
      postData
    )

    const annonces = response.data.result?.data || []

    const properties = annonces.map(mapApiAnnonceToProperty)

    return {
      properties,
      hasMore: annonces.length > 0
    }
  } catch (error) {
    console.error('Erreur lors du chargement des logements:', error)
    return {
      properties: [],
      hasMore: false
    }
  }
}
