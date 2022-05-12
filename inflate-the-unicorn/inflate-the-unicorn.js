// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//declare var for images in HTML
var uni0 = document.getElementById('uni0')
var uni1 = document.getElementById('uni1')
var uni2 = document.getElementById('uni2')

//to change the number on the images file
var baloon0 = 0
var baloon1 = 0
var baloon2 = 0

//clicked unicorn call
let images = document.getElementsByTagName('img')
for (i = 0; i < images.length; i++) {
  images[i].onclick = clickedUnicorn
}

function clickedUnicorn(e) {
  var unicorn = e.target

  if (unicorn.id == 'uni0') {
    baloon0++
    unicorn.src = './images/unicorn-' + baloon0 + '.png'
    //to count max 3 images (0-3)
    if (baloon0 == 3) {
      baloon0 = 0
      alert('Baby baby, one more time')
    }
  }

  if (unicorn.id == 'uni1') {
    baloon1++
    unicorn.src = './images/unicorn-' + baloon1 + '.png'
    if (baloon1 == 3) {
      baloon1 = 0
      alert('Oops you did it again')
    }
  }

  if (unicorn.id == 'uni2') {
    baloon2++
    unicorn.src = './images/unicorn-' + baloon2 + '.png'
    if (baloon2 == 3) {
      baloon2 = 0
      alert('Cheerio!')
    }
  }
}
