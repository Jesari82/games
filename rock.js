// Zug des Spielers - Prozess hat einen Index von 3 (0, 1, 2). [0] greift auf das das eingegebene Element als String zu.
let player = process.argv.slice(2)[0]; 

// Zufälliger Zug des Computer -> Die 3 möglichen Nummern werden über einen Switch in Namen (Strings) umgewandelt. der Defaultwertist für die Vollständigkeit -> Monk und so.
function getRandomInt() { 
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return "Schere"
        case 1:
            return "Stein"
        case 2:
            return "Papier"
        default:
            return "Damn it"
    }
  }
const computer = getRandomInt();

// If-Else Abfrage: Ergebnis. Abfrage von True-False Werten. Hierbei müssen für && beide Werte und für || ein Wert "true" sein um als "Sieg" interpretiert zu werden.
if (player === computer) { 
    console.log(`Das Spiel endet unentschieden! Spieler wählte "${player}" und der Computer hat "${computer}".`)}
else if (player === "Stein" && computer === "Schere" || player === "Schere" && computer === "Papier" || player === "Papier" && computer === "Stein") {
    console.log(`Der Spieler gewinnt! Spieler wählte "${player}" und der Computer hat "${computer}".`)}
else {
    console.log(`Der Computer gewinnt! Der Computer hat "${computer}" und Spieler wählte "${player}".`)}