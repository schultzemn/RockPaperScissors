function getComputerChoice(){
    const rpcArray=["rock", "paper", "scissors"];
    const randomChoice = rpcArray[Math.floor(Math.random() * rpcArray.length)];
    return randomChoice;
} 
const computerChoice = getComputerChoice()
console.log(computerChoice)

let pSelection=prompt('Rock, paper, or scissors?: ');
const playerSelection= pSelection.toLowerCase();
console.log(playerSelection)

console.log(playRound(playerSelection, computerChoice))


function playRound(playerSelection, computerChoice){
    if(playerSelection === computerChoice){
    let results = "Its a tie try again.";
    return results;
}else if((playerSelection === 'rock' && computerChoice === 'paper') || (playerSelection === 'paper' && computerChoice === 'scissors') || (playerSelection === 'scissors' && computerChoice === 'rock')){
    let results = "You Lose! " + computerChoice + " beats " + playerSelection;
    return results;
}else if ((playerSelection === 'rock' && computerChoice === 'scissors') || (playerSelection === 'paper' && computerChoice === 'rock') || (playerSelection === 'scissors' && computerChoice === 'paper')){
    let results = "You Win! " + playerSelection + " beats " + computerChoice;
    return results;
}
}

