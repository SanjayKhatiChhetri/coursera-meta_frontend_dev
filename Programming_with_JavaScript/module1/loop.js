/* Task 1: Incrementing with a for loop 

Imagine you're programming an educational math app for children. 
For one of the lessons, the app needs to show the children a list 
of all of the numbers from 0 to 100. It then needs to show them 
the message "Count complete!"

    1. Set up a for loop that will console.log all of the numbers 
       from 0 to 100, in ascending order. 
    
    2. Once the sequence of numbers is complete, console.log the 
       message ("Count complete!").
 
The final results should be the same as if you wrote the following: 
        console.log(0);
        console.log(1);
        console.log(2);
        ...etc...
        console.log(100);
        console.log("Count complete!"); 
*/

for (let i = 0; i <= 100; i++) {
  console.log(i);
}
console.log("Count Complete");

/* Task 2: Decrementing with a for loop 

Imagine you're writing the code that will control a count down 
display for New Year's Eve. For the last minute of the year, 
the display is supposed to count from 60 to 1. After that, it 
shows the message "Happy New Year!" 

    1. Set up a for loop that will console.log all of the
       numbers from 60 to 1, in descending order. 
    
    2. Once the sequence of numbers is complete, console.log 
       the message ("Happy New Year!").

The final results should be the same as if you wrote the 
following: 
        console.log(60);
        console.log(59);
        console.log(58);
        ...etc...
        console.log(1);
        console.log("Happy New Year!");
*/

for (let i = 60; i >= 1; i--) {
  console.log(i);
}
console.log("Happy New Year!");

/* The code you’ve written is a decrementing for loop in JavaScript. However, the condition in your loop is i <= 0, which means the loop will only run if i is less than or equal to 0.
Here’s how it works:
The initialization let i = 60; sets i to 60.
The condition i <= 0; checks if i is less than or equal to 0. If it is, the loop continues. If it’s not, the loop stops.
The final expression i-- decreases i by 1 after each loop iteration.
In your case, since i is initialized to 60, and 60 is not less than or equal to 0, the condition i <= 0 is false right from the start. Therefore, the loop does not run at all.
If you want to count down from 60 to 0, you should use i >= 0 as your condition, like this: */

/* Task 3: Incrementing with a while loop

    Imagine you're creating a flight simulator, and you're 
    programming the part that will control the plane's acceleration. 
    Starting at a speed of 200 MPH, the plane accelerates to its 
    maximum speed of 500 MPH. Your task is display the plane's speed 
    as it accelerates. 

    1. Set up a while loop that will console.log all of the numbers 
    from 200 to 500, in ascending order.  
      
    2. Once the sequence of numbers is complete, console.log the message 
    ("Maximum speed reached!").

    The final results should be the same as if you wrote the following: 
    
        console.log(200);
        console.log(201);
        console.log(202);
        ...etc...
        console.log(500);
        console.log("Maximum speed reached!");
*/
var i = 200;
while (i <= 500) {
  console.log(i);
  i++;
}

console.log("Maximum speed reached!");

/* Task 4: Decrementing with a while loop 

    Imagine you're creating a calendar app, and it needs to count down 
    the number of days until the new year. The day is currently January 
    1, and it's a non-leap year, so it will need to count down from 365 
    to 1. 

    1. Set up a while loop that will console.log all of the numbers from 
    365 to 1, in descending order. 
      
    2. Once the sequence of numbers is complete, console.log the message 
    ("The year is over!").

    The final results should be the same as if you wrote the following: 
    
        console.log(365);
        console.log(364);
        console.log(363);
        ...etc...
        console.log(1);
        console.log("The year is over!");
*/

var day = 365;

while (day >= 1) {
  console.log(day);
  day--;
}
console.log("The year is over!");

/* Task 5: Using a while loop with an already-declared variable. 

    Imagine you're creating a life simulator game. In the game, the player 
    watches in fast-motion as a character grows up from a baby to an adult, 
    following them from birth to the present day. For this task, imagine the 
    character was born in 1982. You need to keep track of every year she has 
    lived between her birth and the present (2023). 
    
    1. Set up a while loop that will console.log all of the years from 1982 
       to 2022, in ascending order. Use the existing currentYear value to do this. 
      
    2. Once the sequence of years is complete, console.log the message ("Welcome 
       to the present, Sarah! The year is 2023.").
    
    The final results should be the same as if you wrote the following: 
    
        console.log(1982);
        console.log(1983);
        console.log(1984);
        ...etc...
        console.log(2022);
        console.log("Welcome to the present! The year is " + currentYear + ".");
*/

var currentYear = 1982;
while (currentYear <= 2022) {
  console.log(currentYear);
  currentYear++;
}

console.log("Welcome to the present, Sarah! The year is " + currentYear + ".");
