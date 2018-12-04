    var mystery = Math.round(Math.random() * (99)),
      button = document.getElementById('guess'),
      hint = document.getElementById('hint'),
      guessIt = document.getElementById('myGuess'),
      counter = 0;

    button.onclick = guessTheNumber;

      guessIt.onkeypress = function(e) {
      if (e.keyCode == 13) {
        guessTheNumber();
      }
    }

      function guessTheNumber() {
      counter = counter + 1;
      myGuess = document.getElementById('myGuess').value;
      guessIt.value = "";
      if (myGuess == mystery) {
        if ( counter === 1) {
          hint.innerHTML = 'Isa kang tsambalero! Nahulaan mo ang numero ' + mystery + ' sa isang hulaan lang! LUPET MO!!!';
        }
        else hint.innerHTML = 'Bigyan ng jacket! Sa wakas nahulaan mo rin ang numerong ' + mystery + ' sa pang ' + counter + ' subok!';
      }
      if (myGuess < mystery) {
        hint.innerHTML = 'Mas malaki sa ' + myGuess;
      }
      if (myGuess > mystery) {
        hint.innerHTML = 'Mas mababa sa ' + myGuess;
      }
    }























    