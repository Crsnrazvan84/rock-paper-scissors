function getUserchoice() {
    rock.addEventListener('click', function () {
        game("r");
    });
    paper.addEventListener('click', function () {
        game("p");
    });
    scissors.addEventListener('click', function () {
        game("s");
    });
}
