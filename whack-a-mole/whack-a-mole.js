// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let game = document.getElementsByTagName('td')
//variables for the random numbers
let min = 0
let max = 24
let number = randomNumber()
let random = game[number]
//adding audio
let audio = new Audio('./whack-audio.wav')
//adding image
let mole = document.createElement('img')
mole.src = './mole.PNG'
mole.id = 'mole' //for CSS styling the size of the image

//random number generator
function randomNumber() {
  return Math.floor(Math.random() * (max - min + 1) + min).toFixed()
}

//random mole at the start
random.appendChild(mole)

//random mole after getting whacked
function whackedMole() {
  number = randomNumber()
  random = game[number]
  random.appendChild(mole)
  audio.play()
}

mole.onclick = whackedMole
