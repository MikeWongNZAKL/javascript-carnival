// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

const headStr1 = './images/head'
const bodyStr1 = './images/body'
const shoeStr1 = './images/shoes'
let head = document.getElementById(`head`)
let body = document.getElementById(`body`)
let shoes = document.getElementById(`shoe`)
let headIndex = 0
let bodyIndex = 0
let shoeIndex = 0
let clothingIndex = 0
// 0 = head
// 1 = body
// 2 = shoes

function indexUp() {
  if (clothingIndex < 2) {
    clothingIndex++
  } else {
    clothingIndex = 0
  }
}

function indexDown() {
  if (clothingIndex <= 0) {
    clothingIndex = 2
  } else if (clothingIndex <= 2) {
    clothingIndex--
  }
}

function indexRight() {
  if (clothingIndex == 0) {
    const headImg = head
    const headSrc = `${headStr1}${headIndex}.png`
    headImg.src = headSrc
    if (headIndex < 5) {
      headIndex++
    } else {
      headIndex = 0
    }
  } else if (clothingIndex == 1) {
    const bodyImg = body
    const bodySrc = `${bodyStr1}${bodyIndex}.png`
    bodyImg.src = bodySrc
    if (bodyIndex < 5) {
      bodyIndex++
    } else {
      bodyIndex = 0
    }
  } else if (clothingIndex == 2) {
    const shoeImg = shoes
    const shoeSrc = `${shoeStr1}${shoeIndex}.png`
    shoeImg.src = shoeSrc
    if (shoeIndex < 5) {
      shoeIndex++
    } else {
      shoeIndex = 0
    }
  }
}

function indexLeft() {
  if (clothingIndex == 0) {
    const headImg = head
    const headSrc = `${headStr1}${headIndex}.png`
    headImg.src = headSrc
    if (headIndex <= 0) {
      headIndex = 5
    } else if (headIndex <= 5) {
      headIndex--
    }
  } else if (clothingIndex == 1) {
    const bodyImg = body
    const bodySrc = `${bodyStr1}${bodyIndex}.png`
    bodyImg.src = bodySrc
    if (bodyIndex <= 0) {
      bodyIndex = 5
    } else if (bodyIndex <= 5) {
      bodyIndex--
    }
  } else if (clothingIndex == 2) {
    const shoeImg = shoes
    const shoeSrc = `${shoeStr1}${shoeIndex}.png`
    shoeImg.src = shoeSrc
    if (shoeIndex <= 0) {
      shoeIndex = 5
    } else if (shoeIndex <= 5) {
      shoeIndex--
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
