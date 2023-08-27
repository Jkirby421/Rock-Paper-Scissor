const options = document.querySelectorAll(".choice");
const notice = document.querySelector("#alert");
const winMessage = "You Win!";
const loseMessage = "You Lose :(";
const tieMessage = "TIE!";

let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');


let yourScore = 0;
let compScore = 0;

playerScore.textContent = playerScore.textContent + " " + yourScore.toString();
computerScore.textContent = "Computer Score: " + compScore.toString();



options.forEach(option => option.addEventListener('click', () => {
choice = option.textContent;
(playRound(choice));
}));



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

    function playerWin(){
        notice.textContent = winMessage;
        playerScore.textContent = "Your Score: " + yourScore.toString();
        options.forEach(option => option.disabled = true);
        
    }

    function computerWin(){
        notice.textContent = loseMessage;
        computerScore.textContent = "Computer Score: " + compScore.toString();
        options.forEach(option => option.disabled = true);
    }

    function tryAgain() {
        const tryButton = document.createElement('button');
        tryButton.innerText = "Try Again";
        tryButton.addEventListener('click', () => {
            notice.textContent = "";
            yourScore = 0;
            compScore = 0;
            playerScore.textContent = "Your Score: " + yourScore.toString();
            computerScore.textContent = "Your Score: " + compScore.toString();
            options.forEach(option => option.disabled = false);
            document.body.removeChild(tryButton);
        });
        document.body.appendChild(tryButton);
    }
    
    function playRound(playerSelection){
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        notice.textContent = ("");
    
        if (playerSelection === computerSelection){
            notice.textContent = tieMessage;
            console.log(notice.classList)
        }
        else if (playerSelection === "rock"){
            if (computerSelection === "scissors"){
                yourScore++;
            }
            else {
                compScore++;
            }
        }
        else if (playerSelection === "paper"){
            if (computerSelection === "rock") {
                yourScore++;
            }
            else {
                compScore++;
            }
        }
        else {
                if (computerSelection === "paper"){
                    yourScore++;
                }
                else {
                    compScore++;
                }
            }
            playerScore.textContent = "Your Score: " + yourScore.toString();
            computerScore.textContent = "Computer Score: " + compScore.toString();

        if (yourScore === 5) {
            playerWin();
            tryAgain();
        };
        if(compScore === 5) {
            computerWin();
            tryAgain();
        } 
    
    }
    