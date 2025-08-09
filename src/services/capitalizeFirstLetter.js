export function capitalizeFirstLetter(strg) {
  if (!strg) return 'N.C.';
  return strg.charAt(0).toUpperCase() + strg.slice(1);
}
