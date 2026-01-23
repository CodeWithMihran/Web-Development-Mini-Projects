let boxes = document.querySelectorAll(".box");
let newgame_btn = document.querySelector("#newGame");
let reset_btn = document.querySelector("#resetter")
let msg_container = document.querySelector(".messageContainer");
let msg = document.querySelector("#message");

let turnX = true;;
let count = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations !! Player ${winner} has won the game.`;
    reset_btn.classList.add("hide");
    msg_container.classList.remove("hide");
    disableBoxes();
};

const showDraw = () =>{
    msg.innerText = "This game is a Draw !!";
    reset_btn.classList.add("hide");
    msg_container.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
     for(let pattern of winPatterns){
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

     if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
        if(pos1Value === pos2Value && pos2Value === pos3Value){
            showWinner(pos1Value);
        }
      }
    }
    if(count == 9){
        showDraw();
    }
};

boxes.forEach((boxes)=>{
    boxes.addEventListener("click", () =>{
        if(turnX === true){
            boxes.innerText = "X";
            turnX = false;
        }
        else{
            boxes.innerText = "O";
            turnX = true;
        }
        boxes.disabled = true;
        count ++;
        checkWinner();
    })
})

newgame_btn.addEventListener("click", () =>{
    boxes.forEach((boxes)=>{
        boxes.innerText = "";
        boxes.disabled = false;
    })
    turnX = true;
    msg_container.classList.add("hide");
    reset_btn.classList.remove("hide");
})

reset_btn.addEventListener("click", () =>{
    boxes.forEach((boxes)=>{
        boxes.innerText = "";
        boxes.disabled = false;
    })
    turnX = true;
    msg_container.classList.add("hide");
})