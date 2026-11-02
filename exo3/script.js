
let students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];


function B(note) {
    return note >= 10;
}


function A() {
    for (let i = 0; i < students.length; i++) {

        let matricule = students[i][0];
        let note = students[i][3];

        if (B(note)) {
            console.log(matricule + ": admis");
        } else {
            console.log(matricule + ": ajourné");
        }
    }
}
