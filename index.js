let userScore = 0;
let compScore = 0;

let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
let result = document.getElementById('result');

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');



function compChoice(){
    var compChoice = ["r", "p", "c"];
    var i = Math.floor(Math.random() * 3);
    return compChoice[i];
    
}


function userchoice (){
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

game(){
    
}

userchoice();