// let randomNumber;
// randomNumber = Math.floor(Math.random() * 3 + 1);
// // printMessage('Wylosowana liczba to: ' + randomNumber);

// if (randomNumber == 1) {
//   let computerMove = 'kamień';
//   // computerMove = kamień;
//   // printMessage(
//   //   'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'
//   // );
// }
// if (randomNumber == 2) {
//   let computerMove = 'papier';
//   // computerMove = kamień;
//   // printMessage(
//   //   'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'
//   // );
// } else if (randomNumber == 3) {
//   let computerMove = 'nożyce';
//   // computerMove = kamień;
//   // printMessage(
//   //   'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'
//   // );
// }

var argMoveId,
  argPlayerMove,
  argComputerMove,
  computerMove,
  playerMove,
  playerInput;
/**
 * Describe this function...
 */

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
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

function displayResult(argPlayerMove, argComputerMove) {
  console.log(
    'wywołano funkcję displayResults z argumentami: ' +
      argPlayerMove +
      ', ' +
      argComputerMove
  );
  if (
    (argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
    (argPlayerMove == 'nożyce' && argComputerMove == 'papier') ||
    (argPlayerMove == 'kamień' && argComputerMove == 'nożyce')
  ) {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
// if (playerInput == '1') {
//   playerMove = 'kamień';
// }
// if (playerInput == '2') {
//   playerMove = 'papier';
// }
// if (playerInput == '3') {
//   playerMove = 'nożyce';
// } else {
//   playerMove = 'nieznany ruch';
// }
// printMessage('Twój ruch: ' + playerMove);
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
