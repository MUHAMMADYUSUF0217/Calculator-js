let screen = document.querySelector('#screen')
let firstInput = document.querySelector('#number')
let secondInput = document.querySelector('#number2')
let button = document.querySelector('#btn')


firstInput.value
secondInput.value
	
  button.onclick = function plus () {
	let result = parseInt(firstInput.value) + parseInt(secondInput.value)
	screen.textContent=result
	// console.log(result)
}

let screen2 = document.querySelector('#screen2')
let thirdInput = document.querySelector('#number3')
let fourthInput = document.querySelector('#number4')
let button2 = document.querySelector('#btn2')

thirdInput.value
fourthInput.value

  button2.onclick = function minus () {
	let result = parseInt(thirdInput.value) - parseInt(fourthInput.value)
	screen2.textContent=result
}

let screen3 = document.querySelector('#screen3')
let fifthInput = document.querySelector('#number5')
let sixthInput = document.querySelector('#number6')
let button3 = document.querySelector('#btn3')

fifthInput.value
sixthInput.value

  button3.onclick = function multiply () {
	let result = parseInt(fifthInput.value) * parseInt(sixthInput.value)
	screen3.textContent=result
}

let screen4 = document.querySelector('#screen4')
let seventhInput = document.querySelector('#number7')
let eightthInput = document.querySelector('#number8')
let button4 = document.querySelector('#btn4')

seventhInput.value
eightthInput.value

  button4.onclick = function division () {
	let result = parseInt(seventhInput.value) / parseInt(eightthInput.value)
	screen4.textContent=result
}