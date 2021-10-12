/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game:
let player = 1
let gameBoard =[null, null, null,
                null, null, null,
                null, null, null]

const winMsg = `Player ${player} is the winner!`
const tieMsg = `Game is a tie`
const playerTurn = `It's ${player} `




/*------------------------ Cached Element References ------------------------*/
//Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:

const firstSquare = document.querySelector("#sq0")
const secondSquare = document.querySelector("#sq1")
const thirdSquare = document.querySelector("#sq2")
const fourthSquare = document.querySelector("#sq3")
const fifthSquare = document.querySelector("#sq4")
const sixSquare = document.querySelector("#sq5")
const sevSquare = document.querySelector("#sq6")
const eigSquare = document.querySelector("#sq7")
const nineSquare = document.querySelector("#sq8")
const gameStatus = document.getElementById("message")


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

initial()

function initial() {
  board =  [firstSquare, secondSquare, thirdSquare,
            fourthSquare, fifthSquare, sixSquare, 
            sevSquare, eigSquare, nineSquare]
}