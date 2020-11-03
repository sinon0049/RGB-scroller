const sliderContainer = document.querySelector('.slider_container')
let redValue = document.querySelector('.redSlider').value
let greenValue = document.querySelector('.greenSlider').value
let blueValue = document.querySelector('.blueSlider').value
let colorValue = document.querySelector('.value')
let page = document.querySelector('html')
sliderContainer.addEventListener('input', ChangeColor)


function ChangeColor(event) {
  if(event.target.classList.contains('redSlider')) {
    redValue = event.target.value
    let redSpan = document.querySelector('.red_value')
    redSpan.innerHTML = redValue
  } else if(event.target.classList.contains('greenSlider')){
    greenValue = event.target.value
    let greenSpan = document.querySelector('.green_value')
    greenSpan.innerHTML = greenValue
  } else {
    blueValue = event.target.value
    let blueSpan = document.querySelector('.blue_value')
    blueSpan.innerHTML = blueValue
  }
  
  let redHex = DoTwoVariables(parseInt(redValue).toString(16))
  let greenHex = DoTwoVariables(parseInt(greenValue).toString(16))
  let blueHex = DoTwoVariables(parseInt(blueValue).toString(16))
  // console.log(red)
  let color = '#' + redHex + greenHex + blueHex
  // console.log(color)
  colorValue.innerHTML = color
  page.style.background = color
}

function DoTwoVariables(hexnumber) {
  if(hexnumber.length === 1) {
    hexnumber = '0' + hexnumber
  }
  return hexnumber
}