// services/logementsService.js
import axios from 'axios'

/**
 * Charge les logements avec filtres et pagination
 * @param {Object} filters - { search, location, propertyType }
 * @param {number} page - numéro de page à charger (1-based)
 * @returns {Promise<{properties: Array, hasMore: boolean}>}
 */
export async function fetchProperties(filters, page = 1) {
    try {
        const response = await axios.post(
            'https://mydevapi.espacebailleurekna.fr/api/v2/mobile/logements',
            {
                page,
                search: filters.search || '',
                ville: filters.location || '',
                type_logement: filters.propertyType || 'appartement'
            }
        )

        const annonces = response.data.result?.data || []

        const properties = annonces.map((annonce, index) => ({
            id: annonce.id || `${page}-${index}`,
            title: annonce.ville || 'Ville inconnue',
            address: `${annonce.adresse || ''} ${annonce.code_postal || ''}, ${annonce.ville || ''
                
            }`.trim(),
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
