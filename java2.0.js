let computerChoice=getComputerChoice();
let playerChoice='';

//Global Variable
let playerScore=0;
let computerScore=0;
let roundsPlayed=0;
let result= '';

//event listener for all
const buttons = document.querySelectorAll('button');
const Result=document.querySelector('#Result');
const pScore=document.querySelector('#pScore');
const cScore=document.querySelector('#cScore');
const rndsPlayed=document.querySelector('#rndsPlayed');




//Main Functions
//Gets player choice & plays round

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice=button.id;
        playRound(playerChoice, computerChoice);
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
    let result = tied;
    console.log(playerChoice, computerChoice, result);
    return result;
    }
    else if((playerChoice === 'rock' && computerChoice === 'paper') || 
    (playerChoice === 'paper' && computerChoice === 'scissors') || 
    playerChoice === 'scissors' && computerChoice === 'rock'){
    let loss = "You Lose! " + computerChoice + " beats " + playerChoice;
    let result = loss;
    computerScore++;
    console.log(playerChoice, computerChoice, result);
    return result;
    }
    else if((playerChoice === 'rock' && computerChoice === 'scissors') 
    ||  (playerChoice === 'paper' && computerChoice === 'rock') 
    ||  (playerChoice === 'scissors' && computerChoice === 'paper')){
    let win = "You Win! " + playerChoice + " beats " + computerChoice;
    let result = win;
    playerScore++;
    console.log(playerChoice, computerChoice, result);
    return result;
    }
    
}









   