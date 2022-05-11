// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//declare var for images in HTML
var uni0 = document.getElementById('uni0')
var uni1 = document.getElementById('uni1')
var uni2 = document.getElementById('uni2')

//to change the number on the images file
var baloonInflate0 = 0
var baloonInflate1 = 0
var baloonInflate2 = 0

//clicked unicorn call
uni0.onclick = clickedUni
uni1.onclick = clickedUni
uni2.onclick = clickedUni

function clickedUni(event) {
  var unicorn = event.target

  if (unicorn.id == 'uni0') {
    baloonInflate0++
    unicorn.src = './images/unicorn-' + baloonInflate0 + '.png'
    //to count max 3 images (0-3)
    if (baloonInflate0 == 3) {
      baloonInflate0 = 0
      alert('Unicorn One says Thank You')
    }
  }

  if (unicorn.id == 'uni1') {
    baloonInflate1++
    unicorn.src = './images/unicorn-' + baloonInflate1 + '.png'
    if (baloonInflate1 == 3) {
      baloonInflate1 = 0
      alert('Unicorn Two says Thank You')
    }
  }

  if (unicorn.id == 'uni2') {
    baloonInflate2++
    unicorn.src = './images/unicorn-' + baloonInflate2 + '.png'
    if (baloonInflate2 == 3) {
      baloonInflate2 = 0
      alert('Unicorn Three says Thank You')
    }
  }
}
