/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * VALIDATION DE PANIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un client achète un panier de 350 MAD. S'il dépasse 200 MAD, la livraison est gratuite. S'il dépasse 500 MAD, il a en plus 10% de réduction. Affichez le coût final du panier et si la livraison est gratuite ou non.
 *
 * RÉSULTAT ATTENDU
 * Coût final: 350 MAD, Livraison: Gratuite
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day01/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let panier = 501
let NVprix
if (panier > 200) {console.log("Livraison" + ":" + " " + "Gratuite")}
if (panier > 500) {console.log("10%" + " " + "reduction")}
if (panier >500) {NVprix = panier * 0.90;console.log("Total" + ":" + " " + NVprix + " " + "MAD")}
else
console.log("Total" + ":" + " " + panier + " " + "MAD")