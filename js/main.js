$( document ).ready(function() {
	console.log('Step:1 - page has loaded!')
    _calculateButton = $('.calculate')

    _calculateButton.click(function (){
    	console.log('On snap you clicked the button!')
    	_numberOne = $('.number-one').val()
	    _numberTwo = $('.number-two').val()
	    _operator = $('.operator').val()

    	calculate(_numberOne, _numberTwo, _operator)
    })
});

function calculate(num1, num2, operator) {
	console.log('Welcome to calculate()')
	answer = ""

	console.log('Number 1: ' + num1 + ' & Number 2: ' + num2)
	x = parseInt(num1, 10)
	y = parseInt(num2, 10)

	console.log('X: ' + x + ' & Y: ' + y)

	switch (operator){
		case "addition":
			console.log('in addition case')
			answer = (x + y)
			break;
		case "subtraction":
			console.log('in subtraction case')
			answer = (x - y)
			break;
	}

	printAnswer(answer)
}

function printAnswer(answer) {
	console.log('Welcome to printAnswer()')
	console.log('Answer : ' + answer)
	_output = $('.answer')
	_output.html("")
	_output.html(answer)

}