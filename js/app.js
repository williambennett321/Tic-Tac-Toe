/*-------------------------------- Constants --------------------------------*/

const winCom =
  [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]]

/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game:
let turn
let board = []

let isWinner







/*------------------------ Cached Element References ------------------------*/
//Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performanullfirstSquare = document.querySelector("#sq0")

let square = document.querySelectorAll(".quadrangle")
let boardElement = document.querySelector(".board")
let reset = document.querySelector(".reset-btn")
let message = document.querySelector("#message")



/*----------------------------- Event Listeners -----------------------------*/
boardElement.addEventListener("click", handleClick)
reset.addEventListener("click", initial)


/*-------------------------------- Functions --------------------------------*/

initial()

function initial() {
  board =
    [null, null, null,
      null, null, null,
      null, null, null]
  

  turn = 1

  isWinner = null



  render()
}


function render() {


  square.forEach((quadrangle, idx) => {
    quadrangle = square[idx]
    if (board[idx] === 1) { // and element is clicked)
      quadrangle.style.backgroundColor = "black"
      quadrangle.innerText = "X"
      quadrangle.style.color = "white"

    } else if (board[idx] === -1) {
      quadrangle.style.backgroundColor = "black"
      quadrangle.innerText = "O"
      quadrangle.style.color = "white"
    } else if (board[idx] === null) {
      quadrangle.style.backgroundColor = "black"
      quadrangle.innerText = ""
    }

  })
  if (!isWinner) {
    message.innerText = ` It's time for ${turn === 1 ? "X" : "O"} to play`
  }  else if (isWinner === `T`) {
    message.innerText = `It's a tie! Try Again!`
  } else if (isWinner === 1) {
    message.innerText = `X is the winner`
  }else if (isWinner === -1) {
    message.innerText = `O is the winner`
  } 
      
}



function handleClick(evt, idx) {
  if (board[(evt.target.id.replace("sq", ""))] === 1 ||
    board[(evt.target.id.replace("sq", ""))] === -1) {
    return
  } else if (isWinner !== null) {
    return
  }

  board[(evt.target.id.replace("sq", ""))] = turn
  turn = turn * -1

  let winner = getWinner()
  function getWinner() {
    winCom.forEach(function (idxInArr) {
      let idx1 = idxInArr[0]
      let idx2 = idxInArr[1]
      let idx3 = idxInArr[2]
      let realWinner = board[idx1]
      let sum = Math.abs(board[idx1] + board[idx2] + board[idx3])
      if (sum === 3) {
        isWinner = realWinner
        return realWinner
      } else if (board.includes(null)) {
        return null
      } else { 
        isWinner = "T"
        return isWinner
      }
    })
    render()
  }
  
}



















  // render()
  // sumOfComb = 0
  //   sumOfComb += idx
  //   if (absValueOfSum === 3 ) {
  //     return `We have a winner!`
  //   } else if (absValueOfSum !== 3) {


