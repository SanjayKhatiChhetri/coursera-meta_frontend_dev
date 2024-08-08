/* Task 1: Using the logical && operator
You are coding an RPG game, where your main character has a certain skill level
based on the value saved the variable named "score".

When your character has a score between 70 and 79 (inclusive of both), it is 
at the "Guru Level".

Use "console.log()" to log out whether or not your main character is at the 
"Guru Level". The expected output based on the current score is "Guru Level: true". 

Hint: Use the && operator in combination with <, and >.

*/

var score = 73;

isGuruLevel = 73 <= score && score <= 79 

console.log("Guru Level:", isGuruLevel )


/* Taak 2: Using the logical || operator
Imagine you are coding a video game. Currently, you're about to code some snippets related to the game over condition.

Write a piece of code that could be used to determine if the game is over,based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.9

Use the console.log() to log our whether or not the game is over. The expected output is "Game Over: true", or "Game Over: false", based upon the values of the variables. */

var timeRemaining = 0;
var energy = 10;

console.log("Game Over: ", timeRemaining == 0 || energy == 0);

/* Task 3: Using the modulus operator, %, to test if your age is even or odd

You need to code a small program that takes a number and determines if it's an even 
number (like 2, 4, 6, 8, 10).

1. Set the variable "myAge" equal to your age.
2. Create a new variable "isAgeEven" that evaluates to "true" if you age is even, 
and to "false" if your age is odd. Use the modulus operator, %, to create this expression.
3. Log to the console whether your age is even or odd. The output should be as follows:

"I'm 39 years old. Even: false"
"I'm 20 years old. Even: true"

Once you've written your solution, try changing the "myAge" variable to 5 to test that it 
works for both even and odd numbers.
*/

var myAge = 24;

var isAgeEven = myAge % 2;

var checkAge = isAgeEven == 0;

console.log(`I'm ${myAge} years old. Even: ${checkAge}`);


/*
Task 4: Use the + addition operator to add numbers. 

Imagine you're creating a mid-year financial report for a food and beverage company, and you need to add up the company's total profit from its first two quarters. The company's profits derive from three sources: beverages, snacks, and candy. 
    
    1. Using the data below, add up the profits for quarter one and quarter two. Use the + operator to add the profits for beverages, snacks, and candy together, and assign the result to the variable that corresponds to it (either quarterOneProfit or quarterTwoProfit). 
    
    2. Add these two totals together to get the grand total of mid-year profit. Use the + operator and assign the result to the totalProfit variable. 
    
    3. Console.log the totalProfit variable to see what it is and write down your answer. 
    
Quarter One Profits
    -Beverages: 152555
    -Snacks:     95543
    -Candy:     121235

Quarter Two Profits
    -Beverages:  164569
    -Snacks:     104072
    -Candy:      175423
*/

var quarterOneBeverages = 152555
var quarterOneSnacks = 95543
var quarterOneCandy = 121235


var quarterTwoBeverages = 164569
var quarterTwoSnacks = 104072
var quarterTwoCandy = 175423

var quarterOneProfit = quarterOneBeverages + quarterOneSnacks + quarterOneCandy

var quarterTwoProfit = quarterTwoBeverages + quarterTwoCandy + quarterTwoSnacks

var totalProfit = quarterOneProfit + quarterTwoProfit

console.log(totalProfit)