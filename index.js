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
            rock.classList.add('greenGlow');
            setTimeout(function () {
                rock.classList.remove('greenGlow');
            },300);
            break;
        case "pr":
            userScore++;
            result_p.innerHTML = "Paper covers Rock <br> You win!";
            paper.classList.add('greenGlow');
            setTimeout(function () {
                paper.classList.remove('greenGlow');
            },300);
            break;
        case "sp":
            userScore++;
            result_p.innerHTML = "Scissors cuts Paper <br> You win!";
            scissors.classList.add('greenGlow');
            setTimeout(function () {
                scissors.classList.remove('greenGlow');
            },300);
            break;

        //lose case
        case "rp":
            userScore++;
            result_p.innerHTML = "Rock gets covered by Paper <br> You lose!";
            rock.classList.add('redGlow');
            setTimeout(function () {
                rock.classList.remove('redGlow');
            },300);
            break;
        case "ps":
            userScore++;
            result_p.innerHTML = "Paper gets cut by Scissors <br> You lose!";
            paper.classList.add('redGlow');
            setTimeout(function () {
                paper.classList.remove('redGlow');
            },300);
            break;
        case "sr":
            userScore++;
            result_p.innerHTML = "Scissors get smashed by Rock <br> You lose!";
            scissors.classList.add('redGlow');
            setTimeout(function () {
                scissors.classList.remove('redGlow');
            },300);
            break;

        //draw case    
        case "rr":
            compScore++;
            result_p.innerHTML = `You both chose Rock <br>It's a draw!`;
            rock.classList.add('yellowGlow');
            setTimeout(function () {
                rock.classList.remove('yellowGlow');
            },300);
            break;
        case "pp":
            compScore++;
            result_p.innerHTML = `You both chose Paper <br>It's a draw!`;
            paper.classList.add('yellowGlow');
            setTimeout(function () {
                paper.classList.remove('yellowGlow');
            },300);
            break;
        case "ss":
            compScore++;
            result_p.innerHTML = `You both chose Scissors <br>It's a draw!`;
            scissors.classList.add('yellowGlow');
            setTimeout(function () {
                scissors.classList.remove('yellowGlow');
            },300);
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