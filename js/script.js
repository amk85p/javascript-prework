const buttonRock = document.getElementById('buttonRock');
buttonRock.addEventListener('click', function () {
  buttonClicked('kamień');
});
const buttonPaper = document.getElementById('buttonPaper');
buttonPaper.addEventListener('click', function () {
  buttonClicked('papier');
});
const buttonScisors = document.getElementById('buttonScisors');
buttonScisors.addEventListener('click', function () {
  buttonClicked('nożyce');
});

function buttonClicked(argButtonName) {
  clearMessages();
  console.log('ruch gracza to: ' + argButtonName);

  const playerMove = argButtonName;
  console.log(playerMove);

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);

  displayResult(argButtonName, computerMove);
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMovName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage(
      'Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".'
    );
    return 'kamień';
  }
}

function displayResult(argButtonName, argComputerMove) {
  console.log(
    'wywołano funkcję displayResults z argumentami: ' +
      argButtonName +
      ', ' +
      argComputerMove
  );
  if (
    (argButtonName == 'papier' && argComputerMove == 'kamień') ||
    (argButtonName == 'nożyce' && argComputerMove == 'papier') ||
    (argButtonName == 'kamień' && argComputerMove == 'nożyce')
  ) {
    printMessage('Wygrywasz!');
  } else if (argButtonName == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argButtonName);
}
