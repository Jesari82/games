console.log('Rock Paper Scissors')

//Noch offen zu klären????
// console.log(process.argv);
// const player = ['rock', 'paper', 'scissors'];

// Spieler-Zug
let player = "Scissors";

// Computer Zufallszug -> Die 3 möglichen numbers werden über einen Switch in die Zugnahmen umgewandelt - Defaultwert für die Vollständigkeit.
function getRandomInt() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
        default:
            return "Damn it"
    }
  }

// getRandomInt ist mir zu sperrig -> theoretisch nciht notwenig, nur hübscher
const computer = getRandomInt();

// If-Else Abfrage für das Ergebnis. Abfrage von True-False Werten. Hierbei müssen bei && beide Werte und bei || ein Wert true sein um als relevanter Wert erkannt zu werden.
if (player === computer) {
    console.log(`Das Spiel endet unentschieden! ${player} : ${computer}`)}
else if (player === "Rock" && computer === "Scissors" || player === "Scissors" && computer === "Paper" || player === "Paper" && computer === "Rock") {
    console.log(`Der Spieler gewinnt! ${player} : ${computer}`)}
else {
    console.log(`Der Computer gewinnt! ${computer} : ${player}`)}

// Restspuren: fliegen raus, nur zum testen.
// console.log(player)
// console.log(getRandomInt())
// console.log(computer)