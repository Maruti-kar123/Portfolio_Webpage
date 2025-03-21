let userScore=document.getElementById("userScore");
userScore=0;
let compScore=document.getElementById("compScore");
compScore=0;
let choices=document.querySelectorAll(".choice");

const genCompChoice = () =>{
    let options=["rock","paper","scissors"];
    let compChoice=Math.floor(Math.random()*3); 
    return options[compChoice];
} 
const drawGame =() =>{
    console.log("Game was draw play again");
    
}

let shoWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){ 
        userScore++;
        console.log("You win");
        msg.innerText=`You win.your  ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        document.getElementById("userScore").innerHTML=userScore;
        if(userScore===10){
            let endId=document.getElementById("endId");
            endId.style.backgroundColor="yellow";
            endId.innerHTML="You are the WINNER";
            // for(let win of window.open()){
            //     win.close();
            // }
            msg.innerText=`Please refresh to play again`;
        }
    }
    
    else{
        compScore++;
        console.log("You lose"); 
        msg.innerText=`You lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        document.getElementById("compScore").innerHTML=compScore;
        if(compScore===10){
            let endId=document.getElementById("endId");
            endId.style.backgroundColor="yellow";
            endId.innerHTML="oops! you are the looser ";
            // for(let win of window.open()){
            //     win.close();
            // }
            msg.innerText=`Please refresh to play again`;
        }
    }
}


let playGame= (userChoice) =>{
    console.log("User choice is :",userChoice);
    let compChoice=genCompChoice();
    console.log("Computer choice is :",compChoice);

    if(userChoice ===compChoice){
        drawGame();
        msg.innerHTML="Game was draw";
        msg.style.backgroundColor="blue";
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="scissors"?true:false;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;  
        }   
        else if(userChoice==="scissors"){
            userWin=compChoice==="paper"?true:false;
        }
        let msg=document.querySelector("#msg");
        shoWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach ((choice) => {
    choice.addEventListener("click",() =>{
        let userChoice=choice.getAttribute("id"); 
        playGame(userChoice);
    })
})



