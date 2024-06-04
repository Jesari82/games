console.log('Rock Paper Scissors')

// console.log(process.argv);
// const player = ['rock', 'paper', 'scissors'];

let player = "Scissors";

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

const computer = getRandomInt();

if (player === computer) {
    console.log(`Das Spiel endet unentschieden! ${player} : ${computer}`)}
else if (player === "Rock" && computer === "Scissors" || player === "Scissors" && computer === "Paper" || player === "Paper" && computer === "Rock") {
    console.log(`Der Spieler gewinnt! ${player} : ${computer}`)}
else {
    console.log(`Der Computer gewinnt! ${computer} : ${player}`)}

// console.log(player)
// console.log(getRandomInt())
// console.log(computer)