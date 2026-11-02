
let produit = {
    nom: "Mascara",
    prix: 5,
    quantite: 50
};

let valeurStock = produit.prix * produit.quantite;

console.log("valeur du stock de " + produit.nom + " : " + valeurStock);


let catalogue = [
    { nom: "Mascara", prix: 5, quantite: 50 },
    { nom: "Eyeliner", prix: 15, quantite: 25 },
    { nom: "Blush", prix: 10, quantite: 50 },
    { nom: "Gloss", prix: 10, quantite: 30 },
    { nom: "Concealer", prix: 15, quantite: 50 }
];


let sommePrix = catalogue.reduce(function(somme, p) {
    return somme + p.prix;
}, 0);

let moyenne = sommePrix / catalogue.length;

console.log("Prix moyen : " + moyenne);



let produitsChers = catalogue.filter(function(p) {
    return p.prix > moyenne;
});

console.log("Produits dont le prix dépasse la moyenne :");
console.log(produitsChers);


let totalArticles = catalogue.reduce(function(total, p) {
    return total + p.quantite;
}, 0);

let valeurGlobale = catalogue.reduce(function(total, p) {
    return total + (p.prix * p.quantite);
}, 0);

console.log("Nombre total d'articles : " + totalArticles);
console.log("Valeur globale du stock : " + valeurGlobale);

