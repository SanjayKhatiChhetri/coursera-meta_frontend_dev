/* 
    Logical Operators 
*/

var currentTime = 13;
console.log(currentTime > 9 && currentTime < 17); // true
// The above statement is equivalent to the true && true which is true.

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

/* 
    logical or operator 
*/

var currentTime = 7;
//wheter the current time is outside the bussiness hours 9 to 17.
console.log(currentTime < 9 || currentTime > 17);
// The above statement is equivalent to console.log(7 < 9 || 7 > 17); which is consoole.log(true || false); which is true.
//explanation: is 7 less than 9 which is true or is 7 greater than 17 which is false. The result is true.

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

/* 
    Logical NOT operator
 */

var dogHungry = true;
console.log("Dog is hungry", dogHungry);
console.log("Dog is eating");
console.log("Dog is hungry:", dogHungry); // value is still true.  now with help of not operator(!) we can change the value of dogHungry to false.
console.log("Dog is hungry:", !dogHungry); // dogHungry = ture => !dogHungry = false.

//not operator acts as a sort of switch, changing one bollean value to its opposite.
dogHungry = !dogHungry; // dogHungry = false
console.log("Dog is hungry:", dogHungry); // false

dogHungry = !dogHungry; // dogHungry = true
console.log("Dog is hungry:", dogHungry); // true

/* 
    modulas operator //mathematical operator, it is job is to tell us the remainder of a division operation.
    example: we have 24 candies and we want to distribute them among 5 children.
    we are going to divide 24 by 5 and let's assume we can't divide the candies ip into pices.
    but we want distribute the candies as evenly as possible.
    so we are goone be left with some candies that we can't distribute.
    and the modulas operator is going to tell us how many candies we are going to be left with. what is the remainder . 
 */

24 % 5; // 4
// 24 divided by 5 is 4 with a remainder of 4. so we are going to be left with 4 candies that we can't distribute.

/*
    Equality Operator which is two equal signs (==) right next to each other. 
    it is used to compare two values and see if they are equal.

    example:
    image we have two numbers, one of that is order refrence that we have saved inside the database with variable name oderRefNum .
    now image a user put there order refrence number into a form on our companys website and we want to check if the number they put into the form matches the one that we have saved in our database. 
    image they write the number 1234567 into the form and then for the sake of this example let's store that number in variable userInput = 1234567.
    now we want our code check whether the number that the user input.
*/

var orderRefNum = 1234567;
var userInput = 1234567;

console.log(orderRefNum == userInput); // result -> true ::::code to check if the user input matches the order refrence number that we have saved in our database.

//one example to equality operator.

var orderRefNum = 1234567;
var userInput = "1234567";

console.log(orderRefNum == userInput); // here the result is true because the equality operator is not strict. it does not care about the data type of the values that we are comparing. It olnly checks if the values are equal.

//type coercion: the process of converting one type of value to another type of value.
//underneat the hood, javascript is converting one of the data types to another data type. so, with same data type, the camparions can be made.

//strict equality operator: it is three equal signs (===) right next to each other.
//example:
// if we want to check data type and value, and tell us wether they are equal or not.

var orderRefNum = 1234567;
var userInput = "1234567";

console.log(orderRefNum === userInput); // result -> false ::::code to check if the user input matches the order refrence number that we have saved in our database.
/* ::*****STRICTLY SPEAKING THEY ARE NOT EQUAL BECAUSE THEY ARE NOT THE SAME DATA TYPE.*****:: */

//inequality operator: it is two exclamation marks (!=) right next to each other.

/* EXAMPLE: 
    lets image that the user enter the weak password in our website and we want the user to change the password. while user is change the password we want to check if the new password is different from the old password.
*/

var currentPassword = "023456743";
var newPassword = "02§3456743";

console.log(currentPassword != newPassword); // result -> false ::::user has entered the same password as the old password which is not allowed.

var currentPassword = "023456743";
var newPassword = "02§3456743";
console.log(currentPassword != newPassword); // result -> true ::::user has entered the different password as the old password which is allowed.

//strict inequality operator: it is three exclamation marks (!==) right next to each other.

var currentUserPassword = 23456743;
var newPassword = "23456743";
console.log(currentUserPassword !== newPassword); // result -> true

console.log("myPassword123" != "myPassword101"); // true
console.log(100 !== "100"); // true
console.log("openSesame" !== "openSesame"); // false

/* 
    + operator
    Adding number togther: addition opertor 
    concatenating strings: joining strings together
    */

console.log(5 + 5); // 10
console.log("hello" + "world"); // helloworld
console.log(365 + "days"); // 365days: here the number is converted to string and then concatenated with the string (this goes back to idea of type coresion).

/* 
    Addition Assingment Operator (+=)
*/

var total = 0;

total += 10; // total = total + 10
console.log(total); // 10

total += 20; // total = total + 20
total += 30; // total = total + 30

var story = "Once";
story += " upon ";
story += "a ";
story += "time.";
story += " .....";
console.log(story); // Once upon a time. ......

//operator precedence: the order in which operators are evaluated in an expression.

var result = 10 + 5 * 3; // 25

var result = 60 / 6 / 2; // 5

var someOtherNumber = 5;
var someNumber = 10;

var someNumber = (someOtherNumber = 10); // 10

// remember either you can go from left to right or right to left. but the right to left is more common.
