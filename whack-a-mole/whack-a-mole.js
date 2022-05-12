// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let game = document.getElementsByTagName('td')
var number = randomNumber()
var random = game[number]
//adding audio
var audio = new Audio('./whack-audio.wav')
//adding image
var mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole' //for CSS styling the img

//random number generator
function randomNumber() {
  var box = Math.floor(Math.random() * (24 - 0 + 1)) + 0
  return box
}

random.appendChild(mole)

function whackedMole() {
  number = randomNumber()
  random = game[number]
  random.appendChild(mole)
  audio.play()
}

mole.onclick = whackedMole
