var add = function(number1, number2) {/* Function to add two numbers together.*/
	return "Add = " + (number1 + number2);
}

var subtract = function(number1, number2) {/* Function to subtract two numbers and return difference.*/
	return "Subtract = " + (number1 - number2);
}

var multiply = function(number1, number2) {
	return "Multiply = " + (number1 * number2);
}

var divide = function(number1, number2) {
	return "Divide = " + (number1/number2);
}
//#1 Prompts for user input and assign string input to var
// var number1 = prompt("Enter a number:");// Opens dialog box and prompts for user input 
// 										   // Assign user input to var number1
// var number2 = prompt("Enter another number:");// Opens dialog and prompts for user input
// 										         //Assign user input to var number2

//#2 Prompts for user input and assigns converted input to var
var num1 = parseInt(prompt('Enter a number:'));// Converts user input to integer 
var num2 = parseInt(prompt('Enter another number:'));// Converts user input to integer

// #1 Opens alert window with var number1 passed in as argument
// alert(number1);   
// #2 Opens alert window that will display return of add().
alert(add(num1, num2));

// #3 Opens alert window that will display return value of subtract().
// User input assigned to num1 and num2 passed to subtract() as arguments.
alert(subtract(num1, num2));

// #4 Opens alert window that will display return value of multiply().
alert(multiply(num1, num2));

// #5 Opens alert window that will display return value of divide(). 
alert(divide(num1, num2));


