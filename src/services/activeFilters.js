import { computed } from 'vue'

/**
 * Crée un objet calculé (computed) contenant les filtres actifs
 * avec des booléens pour les options de tri ainsi que les autres filtres.
 * 
 * @param {import('vue').Ref<Object>} filters - un ref contenant les filtres actuels,
 *        avec au minimum la propriété `sort` et autres filtres comme `search`, `location`, `propertyType`.
 * 
 * @returns {import('vue').ComputedRef<Object>} Un computed retournant un objet avec les filtres actifs,
 *          par exemple : { plus_recent: true/false, search: string, ... }
 */
export function useActiveFilters(filters) {
  return computed(() => {
    return {
      plus_recent: filters.value.sort === 'plus_recent',
      plus_ancien: filters.value.sort === 'plus_ancien',
      loyer_decroissant: filters.value.sort === 'loyer_decroissant',
      loyer_croissant: filters.value.sort === 'loyer_croissant',
      search: filters.value.search,
      location: filters.value.location,
      propertyType: filters.value.propertyType
    }
  })
}
