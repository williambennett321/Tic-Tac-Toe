/*-------------------------------- Constants --------------------------------*/

const winCom = 
[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]

/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game:
let turn 
let board = []

let isWinner

const winMsg = () => `Player ${turn} is the winner!`
const tieMsg = () => `Game is a tie`
const playerTurn = () => `It's ${turn}'s turn' `





/*------------------------ Cached Element References ------------------------*/
//Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performanullfirstSquare = document.querySelector("#sq0")

let square = document.querySelectorAll(".quadrangle")
let boardElement = document.querySelector(".board")



/*----------------------------- Event Listeners -----------------------------*/
boardElement.addEventListener("click", handleClick)


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
  if ( board[idx] === 1)  { // and element is clicked)
    quadrangle.style.backgroundColor = "red"
    quadrangle.innerText = "O"

  } else if ( board[idx] === -1) {
    quadrangle.style.backgroundColor = "gold"
    quadrangle.innerText = "X"
    }
  
  })
  if ( isWinner === -1 || isWinner === 1) {
    return winMsg()
  } else if (isWinner === "T") {
      return tieMsg()
  } else {
      return playerTurn()
  }


}
    function handleClick(evt, idx) {
      if( board[(evt.target.id.replace("sq", ""))] === 1 || 
      board[(evt.target.id.replace("sq", ""))] === -1 ) {
        return 
      }
    
    board[(evt.target.id.replace("sq", ""))] = turn
    turn = turn * -1
    
  
    render()

  

  
  } 