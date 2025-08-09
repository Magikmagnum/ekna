// src/services/villesMapper.js
import axios from 'axios'

export async function fetchVilles() {
  try {
    const response = await axios.get(
      'https://mydevapi.espacebailleurekna.fr/api/v2/mobile/users/zones/zones-recherches'
    )
    const result = response.data.result || []

    const villes = result
      .filter(item => item.ville)
      .map(item => ({
        value: item.ville.toLowerCase(),
        label: item.ville
      }))
      .sort((a, b) => a.label.localeCompare(b.label))

    return [{ value: '', label: 'Ville' }, ...villes]
  } catch (error) {
    console.error('Erreur lors du chargement des villes :', error)
    return []
  }
}
