/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';
let a = [1,3,5]
let b = [2,4,6]
let c = [];

let i = 0; 
let j = 0; 
while (i < a.length || j < b.length) {
    if (i >= a.length) {
        c.push(b[j]);
        j++;
    } 

    else if (j >= b.length) {
        c.push(a[i]);
        i++;
    } 

    else if (a[i] < b[j]) {
        c.push(a[i]);
        i++;
    } else {
        c.push(b[j]);
        j++;
    }
}

console.log(c)

