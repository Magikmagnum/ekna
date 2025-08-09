import { capitalizeFirstLetter } from "./capitalizeFirstLetter"
import { formatDateToCountdown } from "./formatDateToCountdown"

export function mapApiAnnonceToProperty(annonce) {
  const now = new Date()
  return {
    id: annonce.id,
    title: annonce.ville || 'Ville inconnue',
    address: `${annonce.adresse || 'Adresse inconnue'}`.trim(),
    imageUrl: annonce.image,
    loyer_hors_charge: annonce.loyer_hors_charge ? `${annonce.loyer_hors_charge} €` : 'Loyer inconnu',
    chambres: annonce.total_chambre?.toString() || 'N.C.',
    bail: annonce.is_meuble ? 'Meublé' : 'Non meublé',
    type_logement: capitalizeFirstLetter(annonce.type_logement) || 'N.C.',
    surface: annonce.surface_total ? `${annonce.surface_total} m²` : 'N.C.',
    security: annonce.loyer_hors_charge ? `${annonce.loyer_hors_charge} € HC` : 'N.C.',
    reference: annonce.reference,
    is_occupant: annonce.is_occupant === 1 ? 'Proprietaire occupant' : 'Proprietaire non occupant',
    type_bail: capitalizeFirstLetter(annonce.type_bail) || 'N.C.',
    locataires: annonce.locataires || [],
    proprietaire: annonce.proprietaire || { photo: '' },
    detailsUrl: `/detail/${annonce.id || ''}`,
    type: annonce.type || 'N.C.',
    min_date: formatDateToCountdown(annonce.minDate),
    chambres_dispobibles: annonce.chambres_dispobible || 'N.C.',
  }
}
