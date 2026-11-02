
function f1() {
    let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    etudiants.forEach(function(etudiant) {
        console.log(etudiant);
    });
}


function f2() {
    let etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    console.log(etudiant);
}



function f3() {
    let etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    etudiants.forEach(function(etudiant) {
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    });
}
