console.log("Laboratoire prêt !");

const nom = "Amina";

let age = 17;

//nom = "Hamzic";
//script.js:4 Uncaught TypeError: Assignment to constant variable.

   
age = 18
console.log(age);
const motDePasseAttendu = "secret123";
let motDePasseUtilisateur = "12345"; // Changez cette valeur pour tester

if ( motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if ("Vérification de la longueur du mot de passe (< 8 caractères)") {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}

const moi = {
    prenom: "Amina",
    nom: "Hamzic",
    age: 18,
    competences: ["HTML", "CSS"]
};
console.log(moi.prenom); // Affiche "VotrePrénom"
