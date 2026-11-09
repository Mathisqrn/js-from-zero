// 1. La phrase de présentation
const prenom = "Mathis";
const age = 21;
const etudiant = true;

console.log(`Je m'appelle ${prenom}, j'ai ${age} ans et ${etudiant ? "je suis" : "je ne suis pas"} étudiant.`);

// 2. Les typeof
console.log(typeof 42, typeof "42", typeof true, typeof null, typeof undefined, typeof [], typeof {});
/* 
typeof null donne "object"
typeof [] donne aussi "object". Pour savoir si c’est un tableau, on utilise Array.isArray([]).
*/

// 3. exercice des prédictions
/*
"5" + 3    "53"
"5" - 3     2 
"5" * "2"   10
true + 1    2
"" == 0     true
"" === 0    false
*/

console.log("5" + 3, "5" - 3, "5" * "2", true + 1, "" == 0 , "" === 0);
// 4. Salaire
const tauxHoraire = 12.31;
const heuresDuMois = 104;
const salaire = Math.round((tauxHoraires * heuresDuMois) * 100) / 100;
console.log(salaire);