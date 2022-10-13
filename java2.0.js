let computerChoice='';
let playerChoice='';

//Global Variable

let playerScore=0;
let computerScore=0;
let roundsPlayed=0;
let result='';

//UI Selectors/ manipulation

const buttons = document.querySelectorAll('button');
const Result=document.querySelector('#Result');
const pScore=document.querySelector('#pScore');
const cScore=document.querySelector('#cScore');
const rndsPlayed=document.querySelector('#rndsPlayed');

//Main Functions
//Gets player choice & runs playRound function

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice=button.id;
        computerChoice=getComputerChoice();
        playerImgMvr(playerChoice);
        computerImgMvr(computerChoice);
        setTimeout(playRound,250, playerChoice, computerChoice);
    });
});


    //computer choice function
function getComputerChoice(){
    const rpsArray=["rock", "paper", "scissors"];
    const randomChoice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return randomChoice;
} 

    //round function 
function playRound(playerChoice,computerChoice){
if(playerChoice === computerChoice){
    let tied = "You Tied! Try again?";
    result = tied;
    roundsPlayed++;  
    }
    else if((playerChoice === 'rock' && computerChoice === 'paper') || 
    (playerChoice === 'paper' && computerChoice === 'scissors') || 
    playerChoice === 'scissors' && computerChoice === 'rock'){
    let loss = "You Lose! " + computerChoice + " beats " + playerChoice;
    result = loss;
    computerScore++;
    roundsPlayed++;
   
    }
    else if((playerChoice === 'rock' && computerChoice === 'scissors') 
    ||  (playerChoice === 'paper' && computerChoice === 'rock') 
    ||  (playerChoice === 'scissors' && computerChoice === 'paper')){
    let win = "You Win! " + playerChoice + " beats " + computerChoice;
    result = win;
    playerScore++;
    roundsPlayed++;
    }
    pScore.textContent=`Player Score: ${playerScore}`;
    rndsPlayed.textContent=`Rounds Played: ${roundsPlayed}`;
    cScore.textContent=`Computer Score: ${computerScore}`;
    Result.textContent=result;

}
    //image functions
function playerImgMvr(playerChoice){
    if(playerChoice==='rock'){
        document.getElementById('pChoice').src="./images/pRock.jpg";
    }else if(playerChoice==='paper'){
        document.getElementById('pChoice').src="./images/pPaper.jpg";
    }else if(playerChoice==='scissors'){
        document.getElementById('pChoice').src="./images/pScissors.jpg";
    }
}
function computerImgMvr(computerChoice){
    if(computerChoice==='rock'){
        document.getElementById('comChoice').src="./images/cRock.jpg";
    }else if(computerChoice==='paper'){
        document.getElementById('comChoice').src="./images/cPaper.jpg";
    }else if(computerChoice==='scissors'){
        document.getElementById('comChoice').src="./images/cScissors.jpg";
    }
}
//ends game/restarts game
function checkScore(playerScore, computerScore){
    if(playerScore === 5){

    }else if(computerScore === 5){

    }
}







   