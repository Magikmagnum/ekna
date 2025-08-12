import axios from 'axios'
import { mapApiAnnonceToProperty } from '@/services/annonceMapper'

/**
 * Charge les logements avec filtres et pagination
 * @param {Object} filters - { search, location, propertyType, plus_recent, plus_ancien, loyer_decroissant, loyer_croissant }
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

    // Type de logement
    if (
      filters.propertyType &&
      !(typeof filters.propertyType === 'object' && filters.propertyType.value === '') &&
      filters.propertyType !== ''
    ) {
      postData.type_logement = typeof filters.propertyType === 'object'
        ? filters.propertyType.value
        : filters.propertyType
    }

    // Tri — on n'envoie que les clés présentes et définies
    const sortKeys = ['plus_recent', 'plus_ancien', 'loyer_decroissant', 'loyer_croissant']
    sortKeys.forEach(key => {
      if (key in filters) {
        postData[key] = Boolean(filters[key])
      }
    })

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
