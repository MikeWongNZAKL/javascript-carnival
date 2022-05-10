// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

game = gameBoard.getElementsByTagName('td')

function randomNumber() {
  var box = Math.floor(Math.random() * (24 - 0 + 1)) + 0
  return box
}

var number = randomNumber()
var randomPlacement = game[number]

var mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole'

randomPlacement.appendChild(mole)

var audio = new Audio()
audio.src = './whack-audio.wav'

function whackedMole() {
  number = randomNumber()
  randomPlacement = game[number]
  randomPlacement.appendChild(mole)
  audio.play()
}

mole.onclick = whackedMole
