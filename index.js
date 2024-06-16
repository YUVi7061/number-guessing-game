var y = Math.floor(Math.random() * 100 + 1);
var guessCount = 1;

document.getElementById("submitguess").onclick = function() {
    var x = parseInt(document.getElementById("guessField").value);

    if (isNaN(x) || x < 1 || x > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    if (x === y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guessCount + " GUESSES");
    } else if (x > y) {
        guessCount++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    } else {
        guessCount++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
}

document.getElementById("resetgame").onclick = function() {
    y = Math.floor(Math.random() * 100 + 1);
    guessCount = 1;
    document.getElementById("guessField").value = "";
    alert("Game reset. Try guessing the new number!");
}
