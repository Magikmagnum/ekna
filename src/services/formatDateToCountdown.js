export function formatDateToCountdown(dateStr) {
  if (!dateStr) return 'Indisponible';

  // Remplacer espace par 'T' pour compatibilité ISO 8601
  const date = new Date(dateStr.replace(' ', 'T'));
  if (isNaN(date)) return 'Date invalide';

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
}
