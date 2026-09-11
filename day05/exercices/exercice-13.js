/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPARAISON DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction sontEgaux(tab1, tab2) qui vérifie si deux tableaux contiennent exactement les mêmes éléments dans le même ordre.
 *  (Rappel: [1] == [1] donne false en JS !).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day05/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let tab1 = [1,2,3,4,5,6,7,8,9]
let tab2 = [1,2,3,4,5,6,7,7,1]
function A(number , s){
    if (number.length != s.length){
        return false
    }
     else { 
        for (let i = 0 ; i < s.length; i++){
            if (number[i] == s[i])
                continue
            else {return false};

        } return true
 
     }   
}
console.log(A(tab1,tab2))