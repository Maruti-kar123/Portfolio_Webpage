let direction ={x:0,y:0};
let inputDir= {x:0, y:0};
// const foodSound=new Audio("food.mp3");
// const gameOverSound=new Audio("gameOver.mp3")

// const moveSound=new Audio("move.mp3");
// const musicSound=new Audio("music.mp3");


let hiscoreBox=document.getElementById("#hiscoreBox");
let s=document.querySelector("#score");
let lastPaintTime=0;
let speed=10;
let hiscorereval=0;
let snakeArray=[
    {x:10,y:10}
]
let score=0;
let food={x:15,y:13}
// Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 <1/speed){
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}
function isCollide(snake){
    // If snake ump to itself
    for(let i=1;i<snakeArray.length;i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    if(snake[0].x >=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
        return true;
    }

}

function gameEngine(){
    // Part 1:Updating the snake array
    if(isCollide(snakeArray)){
        // inputDir= {x:0, y:0};
        alert("Game over .Press any key to play again.");
        snakeArray=[{x:13,y:15}]
        score=0;
        
    }

    // If you have eaten the food increment the score and regenerate the food
    if(snakeArray[0].y=== food.y && snakeArray[0].x=== food.x){
        score+=1;
        s.innerHTML="Score:"+score;
        // if(score>hiscorereval){
        //     hiscorereval=score;
        //     localStorage.setItem("hiscore",JSON.stringify(hiscorereval))
        //     hiscoreBox.innerHTML="HighScore:"+hiscorereval;
        // }
        snakeArray.unshift({x:snakeArray[0].x+inputDir.x,y:snakeArray[0].y+inputDir.y});
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a) *Math.random()), y:Math.round(a+(b-a) * Math.random())}  
    }
    // Moving the snake
    for(let i=snakeArray.length-2;i>=0;i--){
        snakeArray[i+1]={...snakeArray[i]};
    }

    snakeArray[0].x +=inputDir.x;
    snakeArray[0].y +=inputDir.y;

    // Part 2:Display the snake and food
    // Display the snake
    let board=document.querySelector("#board")
    board.innerHTML="";
    snakeArray.forEach((e,index) =>{
        snakeElement=document.createElement('div')  
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        if(index==0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
        foodElement=document.createElement('div')
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement);
}

// Main logic starts here

// let hiscore=localStorage.getItem("hiscore");
// if(hiscore===null){
//     hiscorereval=0;
//     localStorage.setItem("hiscore",JSON.stringify(hiscorereval)) 
// }
// else{
//     hiscore=JSON.parse(hiscore)
//     hiscore.innerHTML="HighScore:"+hiscorereval;
// }

window.requestAnimationFrame(main);
window.addEventListener('keydown',e =>{
    inputDir={x:0,y:1}//Start the game
    // moveSound.play();


    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x=0;
            inputDir.y=-1;
            break;
        case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x=0;
            inputDir.y=1 
            break;
        case "ArrowLeft":
            console.log("ArrowLeft") ;
            inputDir.x=-1;
            inputDir.y=0;
            break;

        case "ArrowRight":
            console.log("ArrowRight") 
            inputDir.x=1;
            inputDir.y=0;
            break;
        default:
            console.log("Some other arrows has pressed") 
            break;
    }
})