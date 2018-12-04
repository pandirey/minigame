    var mystery = Math.round(Math.random() * (99)),
      button = document.getElementById('guess'),
      hint = document.getElementById('hint'),
      guessIt = document.getElementById('myGuess'),
      counter = 0;

    button.onclick = guessTheNumber;

      function guessTheNumber() {
      counter = counter + 1;
      myGuess = document.getElementById('myGuess').value;
      guessIt.value = "";
      if (myGuess == mystery) {
        if ( counter === 1) {
          hint.innerHTML = 'Congratulations, you\'ve guessed the number ' + mystery + ' in 1 try!';
        }
        else hint.innerHTML = 'Congratulations, you\'ve guessed the number ' + mystery + ' in ' + counter + ' tries!';
      }
      if (myGuess < mystery) {
        hint.innerHTML = 'Greater than ' + myGuess;
      }
      if (myGuess > mystery) {
        hint.innerHTML = 'Less than ' + myGuess;
      }
    }























    //   guessIt.onkeypress = function(e) {
    //   if (e.keyCode == 13) {
    //     guessTheNumber();
    //   }
    // }