console.log()
console.log('Schere-Stein-Papier')
console.log()

//Zug des Spielers - Prozess hat einen Index von 3 (0, 1, 2). [0] greift auf das das eingegebene Element als String zu.
let player = process.argv.slice(2)[0];

// Computer Zufallszug -> Die 3 möglichen numbers werden über einen Switch in die Zugnahmen umgewandelt - Defaultwert für die Vollständigkeit.
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

// getRandomInt ist mir zu sperrig -> theoretisch nciht notwenig, nur hübscher
const computer = getRandomInt();

// If-Else Abfrage für das Ergebnis. Abfrage von True-False Werten. Hierbei müssen bei && beide Werte und bei || ein Wert true sein um als relevanter Wert erkannt zu werden.
if (player === computer) {
    console.log(`Das Spiel endet unentschieden! ${player} : ${computer}`)}
else if (player === "Stein" && computer === "Schere" || player === "Schere" && computer === "Papier" || player === "Papier" && computer === "Stein") {
    console.log(`Der Spieler gewinnt! ${player} : ${computer}`)}
else {
    console.log(`Der Computer gewinnt! ${computer} : ${player}`)}