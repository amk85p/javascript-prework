let randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
printMessage('Wylosowana liczba to: ' + randomNumber);

if (randomNumber == 1) {
  let computerMove = 'kamień';
  // computerMove = kamień;
  printMessage(
    'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'
  );
}
if (randomNumber == 2) {
  let computerMove = 'papier';
  // computerMove = kamień;
  printMessage(
    'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'
  );
} else if (randomNumber == 3) {
  let computerMove = 'nożyce';
  // computerMove = kamień;
  printMessage(
    'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'
  );
}
