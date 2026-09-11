/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let tableau = [998,12,19,59,15,763,5889]
function findMinMax(numbers) {
  let min = numbers[0]
  let max = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > min) min = numbers[i]
    if (numbers[i] < max) max = numbers[i]
  }
  return [min, max] 
}
console.log(findMinMax(tableau)) 
