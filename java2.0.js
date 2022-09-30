//function variables
const playerChoice = getPlayerChoice(); 

const computerChoice = getComputerChoice();


//Global Variable
let playerScore=0;
let computerScore=0;
let gamesTied=0;




console.log(game(playerScore, computerScore, gamesTied));





//computer choice function
function getComputerChoice(){
    const rpsArray=["rock", "paper", "scissors"];
    const randomChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return randomChoice;
} 
//player choice function
function getPlayerChoice(){
let pSelection=prompt('Rock, paper, or scissors?: ');
const playerSelection= pSelection.toLowerCase();
return playerSelection;
}
//round function 
function playRound(playerChoice, computerChoice){
if(playerChoice === computerChoice){
let tied = "You Tied! Try again?";
let result = tied;
return result;
}else if((playerChoice === 'rock' && computerChoice === 'paper') || 
(playerChoice === 'paper' && computerChoice === 'scissors') || 
(playerChoice === 'scissors' && computerChoice === 'rock')){
let loss = "You Lose! " + computerChoice + " beats " + playerChoice;
let result = loss;
return result;
}else if((playerChoice === 'rock' && computerChoice === 'scissors') 
||  (playerChoice === 'paper' && computerChoice === 'rock') 
||  (playerChoice === 'scissors' && computerChoice === 'paper')){
let win = "You Win! " + playerChoice + " beats " + computerChoice;
let result = win;
return result;
}
}
//game function 
function game(playerScore, computerScore, gamesTied){
    for(let i = 0; i < 5 || i < 5; i++){
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        const round = playRound(playerChoice, computerChoice);
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(round);
    if(round === "You Win! " + playerChoice + " beats " + computerChoice){
        playerScore++;
    }else if(round === "You Lose! " + computerChoice + " beats " + playerChoice){
        computerScore++;
    }else{
        gamesTied++;
    }
    }if(playerScore > computerScore){
        let endResult= "You Win! Try again?";
        return {
            endResult, gamesTied, playerScore, computerScore
        };
    }else if (playerScore < computerScore){
        let endResult= "You Lose! Try again?";
        return {
            endResult, gamesTied, playerScore, computerScore
        };
    }else{
        let endResult= "You Tied! Try again?";
        return{
            endResult, gamesTied, playerScore, computerScore
        };
    }
    
}








   