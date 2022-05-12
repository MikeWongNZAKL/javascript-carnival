// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let headImg = './images/head'
let bodyImg = './images/body'
let shoesImg = './images/shoes'
let head = document.getElementById(`head`)
let body = document.getElementById(`body`)
let shoes = document.getElementById(`shoes`)

//to change the index number
let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let clothesIndex = 0

function indexUp() {
  if (clothesIndex < 2) {
    clothesIndex++
  } else {
    clothesIndex = 0
  }
}

function indexDown() {
  if (clothesIndex <= 0) {
    clothesIndex = 2
  } else if (clothesIndex <= 2) {
    clothesIndex--
  }
}

function indexRight() {
  if (clothingIndex == 0) {
    head.src = headImg + headIndex + '.png'
    if (headIndex < 5) {
      headIndex++
    } else {
      headIndex = 0
    }
  } else if (clothingIndex == 1) {
    body.src = bodyImg + bodyIndex + '.png'
    if (bodyIndex < 5) {
      bodyIndex++
    } else {
      bodyIndex = 0
    }
  } else if (clothingIndex == 2) {
    shoes.src = shoesImg + shoesIndex + '.png'
    if (shoesIndex < 5) {
      shoesIndex++
    } else {
      shoesIndex = 0
    }
  }
}

function indexLeft() {
  if (clothingIndex == 0) {
    head.src = headImg + headIndex + '.png'
    if (headIndex <= 0) {
      headIndex = 5
    } else if (headIndex <= 5) {
      headIndex--
    }
  } else if (clothingIndex == 1) {
    body.src = bodyImg + bodyIndex + '.png'
    if (bodyIndex <= 0) {
      bodyIndex = 5
    } else if (bodyIndex <= 5) {
      bodyIndex--
    }
  } else if (clothingIndex == 2) {
    shoes.src = shoesImg + shoesIndex + '.png'
    if (shoesIndex <= 0) {
      shoesIndex = 5
    } else if (shoesIndex <= 5) {
      shoesIndex--
    }
  }
}

document.onkeydown = checkKey

function checkKey(e) {
  e = e || window.event
  switch (e.keyCode) {
    //left
    case 37:
      indexLeft()
      break
    //up
    case 38:
      indexUp()
      break
    //right
    case 39:
      indexRight()
      break
    //down
    case 40:
      indexDown()
      break
  }
}
