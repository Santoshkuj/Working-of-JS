//1. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. call the
// function before it is declared to demonstrate hoisting.
console.log(addNumbers(4,5));

function addNumbers(a,b){
   return sum = a+b;
}

// 2. Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
// using function expressions to define the function and call the function before it is declared to demonstrate
// hoisting.
// console.log(multiplyNumber(3,4));
const multiplyNumber = function(a,b) {
    return a * b;
}

// 3. Write a function that takes two numAers as arguments and returns their sum. Declare a variable inside the
// function using the var keyword and log its value to the console before it is assigned a value to demonstrate
// variable hoisting.
function add2Num(num1,num2) {
    console.log(sum);
    var sum = num1+num2;
    return sum;
}
console.log(add2Num(3,4));

// 4 Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting
{
    console.log(x);
    console.log(y);
    console.log(z);
    let x = 5;
    var y = 6;
    const z = 7;
    console.log(x);
    console.log(y);
    console.log(z);
}

// 5. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
// assigned a value to demonstrate the temporal dead zone.
{
    console.log(x1);
    let x1 = "pw skills"
}