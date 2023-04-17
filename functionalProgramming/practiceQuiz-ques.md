# Practice Quiz: Introduction to Functional Programming

> ## **Question 1**
What will print out when the following code runs?
 ```
    var globalVar = 77;

    function scopeTest() {
        var localVar = 88;
    }

    console.log(localVar);
```
 - 77
 - 88
 - null
 - **undefined**-------------  ANSWER<br><br>
<br>

> ## **Question 2**
Variables declared using  const  can be reassigned.
- true
- false---------------------  ANSWER<br><br>
<br>

> ## **Question 3**
When a function calls itself, this is known as _____________.
 ```
    var globalVar = 77;

    function scopeTest() {
        var localVar = 88;
    }

    console.log(localVar);
```
-  **Recursion**------------------  ANSWER
- Looping
- Higher-order Function<br><br>
<br>

> ## **Question 4**
What will print out when the following code runs?
 ```
    function meal(animal) {
        animal.food = animal.food + 10;
    }

    var dog = {
        food: 10
    };
    meal(dog);
    meal(dog);
    console.log(dog.food);
```
 - 10
 - 20
 - **30**-------------  ANSWER
 - 40 <br><br>
<br>

> ## **Question 5**
What value will print out when the following code runs?
 ```
    function two() {
        return 2;
    }

    function one() {
        return 1;
    }

    function calculate(initialValue, incrementValue) {
        return initialValue() + incrementValue() + incrementValue();
    }

    console.log(calculate(two, one));
```
 - 1
 - 2
 - 3
 - **4**-------------  ANSWER <br><br>
<br>

## Coursera Honor Code  Learn more
### I, Sanjay Khati Chhetri, understand that submitting work that isn’t my own may result in permanent failure of this course or deactivation of my Coursera account.