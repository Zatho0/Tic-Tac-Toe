let caseElement = document.querySelectorAll('#case')
let winner = 0

let grille = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

let combiGagnante = [
    [[0, 0], [0, 1], [0, 2]],//ligne 1
    [[1, 0], [1, 1], [1, 2]],//ligne 2
    [[2, 0], [2, 1], [2, 2]],//ligne 3
    [[0, 0], [1, 0], [2, 0]],//colonne 1
    [[0, 1], [1, 1], [2, 1]],//colonne 2
    [[0, 2], [1, 2], [2, 2]],//colonne 3
    [[0, 0], [1, 1], [2, 2]],//Diagonal 1
    [[0, 2], [1, 1], [2, 0]]//Diagonal 1
];



function verifGagner() {
    for (let combi of combiGagnante) {
        let [a, b, c] = combi
        if (
            grille[a[0]][a[1]] !== "" &&
            grille[a[0]][a[1]] === grille[b[0]][b[1]] &&
            grille[a[0]][a[1]] === grille[c[0]][c[1]]
        ) {
            return grille[a[0]][a[1]]
        }
    }
    return
};



let p1 = "X"


caseElement.forEach(caseElement => {
    caseElement.addEventListener('click', () => {
        let ligne = caseElement.dataset.ligne
        let colonne = caseElement.dataset.colonne
        if (grille[ligne][colonne] === "") {
            grille[ligne][colonne] = p1
            caseElement.textContent = p1

            p1 = (p1 === "X") ? "O" : "X";

        }
        let gagnant = verifGagner()
        if (winner) {
            
            setTimeout(() => {
                alert("Gagnant : " + gagnant)
            }, 1000);
            
        }
        
        


    });

})



