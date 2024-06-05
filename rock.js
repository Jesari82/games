let player = process.argv.slice(2)[0]; //Zug des Spielers - Prozess hat einen Index von 3 (0, 1, 2). [0] greift auf das das eingegebene Element als String zu.

function getRandomInt() { // Computer Zufallszug -> Die 3 möglichen numbers werden über einen Switch in die Zugnahmen umgewandelt - Defaultwert für die Vollständigkeit.
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

if (player === computer) { // If-Else Abfrage für das Ergebnis. Abfrage von True-False Werten. Hierbei müssen bei && beide Werte und bei || ein Wert true sein um als relevanter Wert erkannt zu werden.
    console.log(`Das Spiel endet unentschieden! Spieler wählte "${player}" und der Computer hat "${computer}".`)}
else if (player === "Stein" && computer === "Schere" || player === "Schere" && computer === "Papier" || player === "Papier" && computer === "Stein") {
    console.log(`Der Spieler gewinnt! Spieler wählte "${player}" und der Computer hat "${computer}".`)}
else {
    console.log(`Der Computer gewinnt! Der Computer hat "${computer}" und Spieler wählte "${player}".`)}