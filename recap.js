// Example of IIFE
(function() {
    var message = "Hello from inside the IIFE!";
    console.log(message);
})();

// Example of Recursion
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120

// Example of Closures
function outerFunction() {
    var outerVariable = "I'm outside!";
    
    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the enclosing scope
    }
    
    return innerFunction;
}

var closureExample = outerFunction();
closureExample(); // Output: I'm outside!

// Example of Built-in Functions
var numbers = [1, 2, 3, 4, 5];

// Array.map()
var squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// String.toUpperCase()
var message = "hello";
var uppercasedMessage = message.toUpperCase();
console.log(uppercasedMessage); // Output: HELLO

// Math.random()
var randomNum = Math.random(); // Generates a random number between 0 and 1
console.log(randomNum);