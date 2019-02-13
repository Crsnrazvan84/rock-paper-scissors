let userScore = 0;
let compScore = 0;

let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
let result_p = document.getElementById('result');
let result = "";
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');



function compChoice(){
    var compChoice = ["r", "p", "c"];
    var i = Math.floor(Math.random() * 3);
    return compChoice[i];
    
}

function game(userChoice){
    const computerChoice = compChoice();
    console.log(userChoice + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        console.log("You win");
        break;

        case "rp":
        case "pc":
        case "sr":
        console.log('you loose');
        break;

        case "rr":
        case "pp":
        case "ss":
        console.log('draw');
        break;
    }
    
}


function getUserchoice (){
    rock.addEventListener('click', function(){
        game("r");
    })

    paper.addEventListener('click', function(){
        game("p");
    })

    scissors.addEventListener('click', function(){
        game("s");
    })
}



getUserchoice();