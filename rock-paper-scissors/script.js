function playGame() {

    const possibilities = ["rock", "paper", "scissors"];
    const randomUser = Math.floor(Math.random() * 3);
    const randomComputer = Math.floor(Math.random() * 3);

    const userChoice = possibilities[randomUser];
    const computerChoice = possibilities[randomComputer];


    if (userChoice === computerChoice) {
        console.log("Tie!");
    } else if (userChoice === "paper" && computerChoice === "rock") {
        console.log("Computer chose: Rock \n User chose: Paper \n User wins!");
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        // console.log("Computer chose: Scissors");
        // console.log("User chose: Rock");
        // console.log("User wins!");
        console.log("Computer chose: Scissors \n User chose: Rock \n User wins!");
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        // console.log("Computer chose: Rock");
        // console.log("User chose: Scissors");
        // console.log("User loses!");
        console.log("Computer chose: Rock \n User chose: Scissors \n User loses!");
    } else if (userChoice === "rock" && computerChoice === "paper") {
        // console.log("Computer chose: Paper");
        // console.log("User chose: Rock");
        // console.log("User loses!");
        console.log("Computer chose: Paper \n User chose: Rock \n User loses!");
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        // console.log("Computer chose: Scissors");
        // console.log("User chose: Paper");
        // console.log("User loses!");
        console.log("Computer chose: Scissors \n User chose: Paper \n User loses!");
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        // console.log("Computer chose: Paper");
        // console.log("User chose: Scissors");
        // console.log("User wins!");
        console.log("Computer chose: Paper \n User chose: Scissors \n User wins!");
    }
}

playGame();
