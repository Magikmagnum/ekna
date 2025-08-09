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
    type_logement: annonce.type_logement || 'N.C.',
    surface: annonce.surface_total ? `${annonce.surface_total} m²` : 'N.C.',
    security: annonce.loyer_hors_charge ? `${annonce.loyer_hors_charge} € HC` : 'N.C.',
    reference: annonce.reference,
    is_occupant: annonce.is_occupant === 1 ? 'Proprietaire occupant' : 'Proprietaire non occupant',
    type_bail: annonce.type_bail || 'N.C.',
    locataires: annonce.locataires || [],
    proprietaire: annonce.proprietaire || { photo: '' },
    detailsUrl: `/detail/${annonce.id || ''}`,
    type: annonce.type || 'N.C.',
    countdown: {
      days: String(now.getDate()).padStart(2, '0'),
      month: String(now.getMonth() + 1).padStart(2, '0'),
      years: String(now.getFullYear()).slice(-2),
    },
  }
}