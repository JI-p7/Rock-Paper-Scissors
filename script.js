function startGame(click) {
    var userChoice = click.id;
    var computerChoice = generateComputerChoice();

    console.log("User: " + userChoice);
    console.log("CPU: " + computerChoice);

    var results = userWin(userChoice, computerChoice);
    // console.log(results);

    var message = finalmessage(results);
    console.log(message);

    updateFrontEnd(userChoice, computerChoice, message);

}

function generateComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    var choices = ["rock", "paper", "scissors"];

    return choices[randomNumber];
}

function userWin(user, cpu) {
    if (user === cpu) {
        return "draw";
    }

    else if (user == "rock") {
        if (cpu == "scissors") {
            return "won";
        }
        else {
            return "lost";
        }
    }

    else if (user == "paper") {
        if (cpu == "rock") {
            return "won";
        }
        else {
            return "lost";
        }
    }

    else if (user == "scissors") {
        if (cpu == "paper") {
            return "won";
        }
        else {
            return "lost";
        }
    }
}

function finalmessage(result) {
    if (result == "won") {
        return "CONGRATS, YOU WON!";
    }
    else if (result == "lost") {
        return "YOU LOST, SORRY...";
    }
    else {
        return "YOU TIED.";
    }
}

function updateFrontEnd(user_choice, cpu_choice, message) {
    var imageURL = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src,
    }

    document.getElementById("userQuestion").src = imageURL[user_choice];
    document.getElementById("cpuQuestion").src = imageURL[cpu_choice];
    document.getElementById("message").innerHTML = message;
}