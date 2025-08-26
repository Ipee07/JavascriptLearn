let player = 0;
let computer = 0;

function main() {
    while (computer + player < 5) {
        game()

        if (computer === 3 && player === 2 || computer === 4 && player === 1 || computer === 5 && player === 0) {
            console.log("-----------------Computer Wins. Give up-----------------")
        }
        else if (computer === 2 && player === 3 || computer === 1 && player === 4 || computer === 0 && player === 5){
            console.log("-----------------You Win. You're the best-----------------")
        }
        }
}

function game() {
    let choice = playerchoose()
    let opponent = getcomputerchoice()

    if (choice === opponent) {
        console.log("What you chose: " + choice)
        console.log("What opponent chose: " + opponent)
        console.log("It's a tie!");
        
        
    }

    else if (choice === "rock" && opponent === "scissors" || choice === "paper" && opponent === "rock" || choice === "scissors" && opponent === "paper") {
        console.log("What you chose: " + choice)
        console.log("What opponent chose: " + opponent)
        console.log("You win!")
        player += 1;
    }
    else {
        console.log("What you chose: " + choice)
        console.log("What opponent chose: " + opponent)
        console.log("You lose!")
        computer += 1;
    }
}

function playerchoose() {
    
    let playerinput = "";
    
    while (playerinput != "rock" && playerinput != "paper" && playerinput != "scissors") {
    
   
    let playerchoice = prompt("Choose Rock, Paper, or Scissors: ");
    playerinput = playerchoice.toLowerCase();


    }

    return playerinput
}

function getcomputerchoice() {
    ran = Math.random();
    
    if (ran < 1/3) {
        return "rock"
    }
    else if (ran < 2/3) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

let tryagain = "";

while (tryagain != "no") {
    main()
    tryagain = prompt("Would you like to play again? (yes/no)")
}