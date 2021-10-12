/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game:
let turn 
let board = []

let isWinner

const winMsg = `Player ${turn} is the winner!`
const tieMsg = `Game is a tie`
const playerTurn = `It's ${turn}'s turn' `





/*------------------------ Cached Element References ------------------------*/
//Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performanullfirstSquare = document.querySelector("#sq0")

let square = document.querySelectorAll(".quadrangle")



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

initial()

function initial() {
board = 
 [null, null, null,
  null, null, null,
  null, null, null]
isWinner = null

turn = 1

render()
}


function render() {
  
  
  square.forEach((quadrangle,idx) => { 
  quadrangle = square[idx]
  if ( turn === 1)  { // and element is clicked)
    quadrangle.style.backgroundColor = "green"

  } else if (turn === -1) {
    quadrangle.style.backgroundColor = "yellow"
    }
  
  })
  
  
}