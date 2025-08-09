export interface Locataire {
  user?: {
    photo?: string
  }
}

export interface PropertyCard {
  id: number;
  title: string;
  address: string;
  imageUrl: string;
  loyer_hors_charge: string;
  chambres: string;
  type: string;
  detailsUrl: string;
  locataires?: Locataire[];
  proprietaire?: { photo?: string; };
  surface: string;
  type_logement: string;
  is_occupant: string;
  min_date: string;
  chambres_dispobibles: string;
}

