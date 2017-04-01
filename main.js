
document.querySelector('#thanks button').addEventListener('click', function () {
  // TASK #1
  alert('yowch! don\'t click me so hard!')
})

document.querySelector('#double button').addEventListener('click', function () {
  // TASK #2
  var pElement = document.querySelector('#compoundInvestment')
  pElement.innerHTML *= 2
})

document.querySelector('#color-circle button').addEventListener('click', function () {
  // TASK #3
  var circle = document.querySelector('#circle-bw')
  if (circle.style.background === 'white' || circle.style.background === '') {
    circle.style.background = 'black'
  } else {
    circle.style.background = 'white'
  }
})

document.querySelector('#blow-up button').addEventListener('click', function () {
  // TASK #4
  var circleRed = document.querySelector('.circle-red')
  var h = window.getComputedStyle(circleRed, null).getPropertyValue('height')
  var w = window.getComputedStyle(circleRed, null).getPropertyValue('width')

  var heightNum = parseInt(h)
  var widthNum = parseInt(w)

  if (heightNum !== 320) {
    heightNum *= 2
    widthNum *= 2
  } else {
    heightNum = 40
    widthNum = 40
  }
  circleRed.style.height = heightNum + 'px'
  circleRed.style.width = widthNum + 'px'
})

document.querySelector('#remove button').addEventListener('click', function () {
  // TASK #5
})

document.querySelector('#reverse-squares button').addEventListener('click', function () {
  // TASK #6
})

document.querySelector('#pig-latin button').addEventListener('click', function () {
  // TASK #7
})

document.querySelector('#cycle-image button').addEventListener('click', function () {
  // TASK #8
})
