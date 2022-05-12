// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//declare variable for images in HTML
let unicorn0 = document.getElementById('unicorn0')
let unicorn1 = document.getElementById('unicorn1')
let unicorn2 = document.getElementById('unicorn2')
let uniImg = './images/unicorn-'

//to change the index number
let baloon0 = 0
let baloon1 = 0
let baloon2 = 0

//clicked unicorn call
let images = document.getElementsByTagName('img')
for (i = 0; i < images.length; i++) {
  images[i].onclick = clickedUnicorn
}

function clickedUnicorn(e) {
  var unicorn = e.target

  if (unicorn.id == 'unicorn0') {
    baloon0++
    unicorn.src = uniImg + baloon0 + '.png'
    //to count max 3 images (0-3)
    if (baloon0 == 3) {
      baloon0 = 0
      alert('Baby baby, one more time')
    }
  }

  if (unicorn.id == 'unicorn1') {
    baloon1++
    unicorn.src = uniImg + baloon1 + '.png'
    if (baloon1 == 3) {
      baloon1 = 0
      alert('Oops you did it again')
    }
  }

  if (unicorn.id == 'unicorn2') {
    baloon2++
    unicorn.src = uniImg + baloon2 + '.png'
    if (baloon2 == 3) {
      baloon2 = 0
      alert('Cheerio!')
    }
  }
}
