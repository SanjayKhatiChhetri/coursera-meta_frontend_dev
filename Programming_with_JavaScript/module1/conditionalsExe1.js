/*
Task 1: using if-else statements 

Imagine you're creating an app for a movie theater. The app will be for the people who 
work in the theater's box office, and it will help them to figure out how much money 
customers should pay for their movie tickets. The movie theater has a variable pricing 
system that works as follows:
    
    - If the customer is 65 or older, they get a senior discount and pay $7.
    - If the customer is between the ages of 14 and 24, they get a student discount 
      and pay $6. 
    - If the customer is under the age of 14, they get a child discount and pay $5. 
    - If the customer is an adult between the ages of 25 and 64, they pay a normal 
      price of $10.
    - If the customer is a Movie Club member, they pay $0. 
    
    1. Write a series of if-else statements that check the values of the variables 
       below and console.log the appropriate price. 
    2. Set up the statements so that if an invalid age is provided (such as a string 
       of text characters), the message "Invalid input" is returned in the console. 
    3. Go through each one of the test cases below and check if you get the correct 
       output in the console. 
    
    Hints:
    - The syntax for checking if a number is "greater than or equal to" another number 
      is >=  
    - The syntax for "lesser than or equal to"  is <= 
    - To check multiple conditions at the same time, you can use the && operator. 
    - Remember that an output like "$7" is a string, not a number, so it needs quotes. 
    - Think carefully about the logic of the order of your if-else statements. The order 
      in which you should write them is not necessarily the order in which the system is 
      described above. 
*/

/* Test cases */
//customerAge= 41; // expected result: $10
//customerAge = 20; // expected result: $6
//customerAge = "x"; // expected result: Invalid input.
//customerAge = 9; // expected result: $5
//customerAge = 68; // expected result: $7
//movieClubMember = true; // expected result: $0

/* Recap of conditions and results:  
65+: $7
14-24: $6
Under 14: $5
25-64: $10
Club member: $0
Invalid customerAge: "invalid input"
*/

/* Write your code below here. 
- If the customer is 65 or older, they get a senior discount and pay $7.
- If the customer is between the ages of 14 and 24, they get a student discount 
and pay $6. 
- If the customer is under the age of 14, they get a child discount and pay $5. 
- If the customer is an adult between the ages of 25 and 64, they pay a normal 
price of $10.
- If the customer is a Movie Club member, they pay $0. */

var customerAge;
var movieClubMember = false;

customerAge = 41; // expected result: $10
customerAge = 20; // expected result: $6
customerAge = "x"; // expected result: Invalid input.
customerAge = 5; // expected result: $5
customerAge = 68; // expected result: $7
movieClubMember = true; // expected result: $0

if (movieClubMember == true) {
  console.log("you pay 0");
} else if (customerAge >= 65) {
  console.log("you get a senior discont ang your ticket prices is $7.");
} else if (customerAge >= 14 && customerAge <= 24) {
  console.log("you get a student discount and your ticket price is $6.");
} else if (customerAge < 14) {
  console.log("you get a children discount and your ticket price is $5.");
} else if (customerAge >= 25 && customerAge <= 64) {
  console.log("you get no dicount and your ticket price is $10.");
} else if (typeof customerAge !== "number") {
  console.log("invalid input");
} else {
  console.log("program fails");
}

/* 
difference betn using || && operator 

if (customerAge >= 14 && customerAge <= 24) {
  console.log("you get a student discount and your ticket price is $6.");
} else {
  console.log("err");
}

console.log("customerAge >= 14 : ", customerAge >= 14)
console.log("customerAge <= 24 : ", customerAge <= 24); */

/* Task 2: using a switch statement 

Imagine you're writing the code for a restaurant's website. Every weekday, the 
restaurant has a different daily special. On the weekends, it does not have any daily
special. The schedule is as follows: 

            Monday: Chili Lime Tacos 
            Tuesday: Cauliflower Pizza
            Wednesday: Hawaiian Hot Dogs 
            Thursday: Grilled Beet Burger 
            Friday: Sweet Potato Curry Falafel
            Saturday & Sunday: no specials 

    1. Write a switch statement that checks the day of the week (using the day variable 
       below) and console.logs the daily special corresponding to the current day. 
    2. If there is no special for the current day, the default output should be "No 
       daily special today."
    3. Go through each one of the test cases below and check if you get the correct 
       output in the console.  
 */

var day;

/* Test cases */
day = "Monday"; //expected result: "Chili Lime Tacos"
day = "Tuesday"; //expected result: "Cauliflower Pizza"
day = "Wednesday"; //expected result: "Hawaiian Hot Dogs"
day = "Thursday"; //expected result: "Grilled Beet Burger"
day = "Friday"; //expected result: "Sweet Potato Curry Falafel"
day = "Saturday"; //expected result: "No daily special today."
day = "Sunday"; //expected result: "No daily special today."

/* Write your code below here */

switch (day) {
  case "Monday":
    console.log("Chili Lime Tacos");
    break;
  case "Tuesday":
    console.log("Cauliflower Pizza");
    break;
  case "Wednesday":
    console.log("Hawaiian Hot Dogs");
    break;
  case "Thursday":
    console.log("Grilled Beet Burger");
    break;
  case "Friday":
    console.log("Sweet Potato Curry Falafel");
    break;
  case "Saturday":
    console.log("No daily special today.");
    break;
  case "Sunday":
    console.log("No daily special today.");
    break;
  default:
    console.log("INVADIL INPUT");
}
