function getComputerChoice(){
    let number = Math.floor(Math.random() * (4-1)) + 1;
    if (number === 3){
        return "rock";
    }
    else if (number === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
    }
    
    function playRound(){
        let playerSelection = prompt("Rock, Paper, or Scissor?");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log("Computer:"+computerSelection);
        console.log("Player:"+playerSelection);
    
        if (playerSelection === computerSelection){
            return "tie!";
        }
        else if (playerSelection === "rock"){
            if (computerSelection === "scissor"){
                return "you win";
            }
            else {
                return "you lose";
            }
        }
        else if (playerSelection === "paper"){
            if (computerSelection === "rock") {
                return "you win";
            }
            else {
                return "you lose";
            }
        }
        else if (playerSelection === "scissors"){
                if (computerSelection === "rock"){
                    return "you win";
                }
                else {
                    return "you lose";
                }
            }
    
        else {
            return "Please enter a valid option";
        }
    }
    
    function game(){
        let winCount = 0;
        let loseCount = 0;
        let roundCounter = 1;
    
        while (roundCounter <= 5){
        console.log("Rounds " + roundCounter);
        let round = playRound();
        if (round === "you win"){
            winCount++;
            roundCounter++;
        }
        else if (round === "you lose"){
            loseCount++;
            roundCounter++;  
        }
        else{
        console.log("tie");
        continue;
        }
        }
        roundcounter = 0;
    }
    