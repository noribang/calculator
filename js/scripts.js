var add = function(number1, number2) {/* Function to add two numbers together.*/
	return number1 + number2;
}

//#1 Prompts for user input and assign string input to var
// var number1 = prompt("Enter a number:");// Opens dialog box and prompts for user input 
// 										   // Assign user input to var number1
// var number2 = prompt("Enter another number:");// Opens dialog and prompts for user input
// 										         //Assign user input to var number2

//#2 Prompts for user input and assigns converted input to var
var number1 = parseInt(prompt('Enter a number:'));// Converts user input to integer 
var number2 = parseInt(prompt('Enter another number:'));// Converts user input to integer

// #1
// alert(number1); // Opens alert window with var number1 passed in as argument 
// #2
alert(add(number1, number2));// opens alert window with var number1 and number2 passed in as arguments
