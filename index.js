let userScore = 0;
let compScore = 0;
let result_p = document.getElementById('result');
let rock = document.getElementById('r');
let paper = document.getElementById('p');
let scissors = document.getElementById('s');
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');



function compChoice() {
    var compChoice = ["r", "p", "s"];
    var i = Math.floor(Math.random() * 3);
    return compChoice[i];

}

function fullWord (letter){
    if (letter === "r") {
        return "Rock"
    } else if (letter === "s") {
        return "Scissors"
    } else if (letter === "p") {
        return "Paper"
    }
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = fullWord(userChoice) +  " beats " + fullWord(computerChoice) + "<br> You win!";
    document.getElementById(userChoice).classList.add('greenGlow');
            setTimeout(function () {
                document.getElementById(userChoice).classList.remove('greenGlow');
            },300);


}

function lose(userChoice, computerChoice){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = fullWord(userChoice) +  " loses to " + fullWord(computerChoice) + "<br> You lose!";
    document.getElementById(userChoice).classList.add('redGlow');
            setTimeout(function () {
                document.getElementById(userChoice).classList.remove('redGlow');
            },300);

}
function draw(userChoice, computerChoice){
    result_p.innerHTML = fullWord(userChoice) +  " equals " + fullWord(computerChoice) + "<br> It's a draw!";
    document.getElementById(userChoice).classList.add('yellowGlow');
            setTimeout(function () {
                document.getElementById(userChoice).classList.remove('yellowGlow');
            },300);

}

function game(userChoice) {
    
    const computerChoice = compChoice();
    switch (userChoice + computerChoice) {
        //win case
        case "rs":
            win(userChoice,computerChoice);
            break;
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sp":
            win(userChoice, computerChoice);
            break;

        //lose case
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "sr":
            lose(userChoice, computerChoice);
            break;

        //draw case    
        case "rr":
            draw(userChoice, computerChoice);
            break;
        case "pp":
            draw(userChoice, computerChoice);
            break;
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

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