/**
 * Formate une date JS en DD/MM/YYYY
 * @param {Date} date
 * @returns {string} date formatée
 */
function formatDateFR(date) {
  const d = date.getDate().toString().padStart(2, "0")
  const m = (date.getMonth() + 1).toString().padStart(2, "0")
  const y = date.getFullYear()
  return `${d}/${m}/${y}`
}

/**
 * Récupère la date de début la plus proche (dans le futur ou présente)
 * et la date de fin la plus éloignée parmi toutes les chambres.
 *
 * @param {Array} chambres - Tableau d'objets chambres.
 * Chaque chambre doit contenir une propriété `date_disponibilites`
 * qui est un tableau de chaînes au format "DD/MM/YYYY Au DD/MM/YYYY".
 *
 * @returns {{ minDate: string|null, maxDate: string|null }}
 * Un objet contenant :
 *  - minDate : la date de début la plus proche de la date actuelle (format DD/MM/YYYY).
 *  - maxDate : la date de fin la plus éloignée (format DD/MM/YYYY).
 *  - Si aucune chambre n’est disponible, minDate et maxDate seront `null`.
 *
 * @example
 * const chambres = [
 *   { date_disponibilites: ["01/08/2025 Au 31/12/2025"] },
 *   { date_disponibilites: ["15/09/2025 Au 20/10/2025"] }
 * ];
 *
 * const dispo = getDisponibiliteGlobal(chambres);
 * // Résultat attendu :
 * // { minDate: "01/08/2025", maxDate: "31/12/2025" }
 */
export function getDisponibiliteGlobal(chambres) {
  if (!chambres || chambres.length === 0) {
    return { minDate: null, maxDate: null };
  }

  const datesMin = [];
  const datesMax = [];

  chambres.forEach(chambre => {
    if (!Array.isArray(chambre.date_disponibilites)) return;

    chambre.date_disponibilites.forEach(dateRange => {
      if (!dateRange.includes("Au")) return;

      const [startStr, endStr] = dateRange.split(" Au ");

      // convertir format DD/MM/YYYY → Date
      const [d1, m1, y1] = startStr.split("/").map(Number);
      const [d2, m2, y2] = endStr.split("/").map(Number);

      const start = new Date(y1, m1 - 1, d1);
      const end = new Date(y2, m2 - 1, d2);

      datesMin.push(start);
      datesMax.push(end);
    });
  });

  if (datesMin.length === 0 || datesMax.length === 0) {
    return { minDate: null, maxDate: null };
  }

  const minDate = formatDateFR(new Date(Math.min(...datesMin)));
  const maxDate = formatDateFR(new Date(Math.max(...datesMax)));

  return { minDate, maxDate };
}
