let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
//let newgamebtn = document.querySelector("#newgame");
let Header = document.querySelector(".header");
let msg= document.querySelector("#msg");
let turn0=true;
let count=0;

let arr=[[0,1,2],[3,4,5],[6,7,8]];
const winConditions = [
  [0, 1, 2], // Row 1
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7], // Column 2
  [2, 5, 8], // Row 3
  [2, 4, 6],
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [6, 4, 2]
];

const resetGame = () => {
  turn0=true;
  count=0;
  enableBoxes();
  Header.classList.add("hide"); 
};
  boxes.forEach((box) => {
  box.addEventListener("click", () =>{
    console.log("box was clicked");
    if(turn0){
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWin();
    if(count === 9 && !isWinner) {
     gameDraw();
    }
  });
});
const gameDraw = () => {
  msg.innerText = "Game is Draw";
  Header.classList.remove("hide");
  disableBoxes();
};
const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText="";
  }
};

const showWinner = (winner) => {
  msg.innerText =" Winner is " + winner;
  Header.classList.remove("hide");
  disableBoxes();
};

const checkWin = () => {
  for(let pattern of winConditions){
       let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 === pos2 && pos2 === pos3 && pos1 !== ""){
          console.log("Winner",pos1)

          showWinner(pos1);
          return true;
        }
  }
}

reset.addEventListener("click", resetGame);
