let userScore = 0;
let compScore = 0;
let result_p = document.getElementById('result');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');



function compChoice() {
    var compChoice = ["r", "p", "s"];
    var i = Math.floor(Math.random() * 3);
    return compChoice[i];

}

function game(userChoice) {
    const computerChoice = compChoice();
    switch (userChoice + computerChoice) {
        //win case
        case "rs":
            userScore++;
            result_p.innerHTML = "Rock smashes Scissors <br> You win!";
            break;
        case "pr":
            userScore++;
            result_p.innerHTML = "Paper covers Rock <br> You win!";
            break;
        case "sp":
            userScore++;
            result_p.innerHTML = "Scissors cuts Paper <br> You win!";
            break;

        //lose case
        case "rp":
            userScore++;
            result_p.innerHTML = "Rock gets covered by Paper <br> You lose!";
            break;
        case "ps":
            userScore++;
            result_p.innerHTML = "Paper gets cut by Scissors <br> You lose!";
            break;
        case "sr":
            userScore++;
            result_p.innerHTML = "Scissors get smashed by Rock <br> You lose!";
            break;

        //draw case    
        case "rr":
            compScore++;
            result_p.innerHTML = `You both chose Rock <br>It's a draw!`
            break;
        case "pp":
            compScore++;
            result_p.innerHTML = `You both chose Paper <br>It's a draw!`
            break;
        case "ss":
            compScore++;
            result_p.innerHTML = `You both chose Scissors <br>It's a draw!`
            break;
    }
    document.getElementById('user-score').innerHTML = userScore;
    document.getElementById('comp-score').innerHTML = compScore;

}


function getUserchoice() {
    rock.addEventListener('click', function () {
        game("r");
    })

    paper.addEventListener('click', function () {
        game("p");
    })

    scissors.addEventListener('click', function () {
        game("s");
    })
}



getUserchoice();