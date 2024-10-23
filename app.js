// 1. Display current date & time
function displayDateTime() {
    var now = new Date();
    document.write("Current Date & Time: " + now + "<br>");
}

// 2. Greet user by full name
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.write("Hello, " + fullName + "!<br>");
}

// 3. Add two numbers
function addTwoNumbers() {
    var num1 = parseFloat(prompt("Enter first number:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    var sum = num1 + num2;
    document.write("Sum: " + sum + "<br>");
}

// 4. Calculator
function calculator(num1, num2, operator) {
    var result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        result = "Invalid operator";
    }
    document.write("Result: " + result + "<br>");
}

// 5. Square a number
function square(num) {
    return num * num;
}

// 6. Compute factorial
function factorial(n) {
    if (n < 0) return "Invalid number";
    if (n === 0 || n === 1) return 1;
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 7. Display counting
function displayCounting(start, end) {
    var output = "";
    for (var i = start; i <= end; i++) {
        output += i + " ";
    }
    document.write("Counting: " + output + "<br>");
}

// 8. Hypotenuse calculation
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    document.write("Hypotenuse: " + hypotenuse + "<br>");
}

// 9. Area of rectangle
function areaOfRectangle(width, height) {
    return width * height;
}

// 10. Check if a string is palindrome
function isPalindrome(str) {
    var reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 11. Capitalize first letter of each word
function capitalizeFirstLetter(string) {
    var words = string.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

// 12. Find longest word
function findLongestWord(string) {
    var words = string.split(' ');
    var longest = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

// 13. Count occurrences of a letter
function countOccurrences(string, letter) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}

// 14. Calculate properties of a circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference + "<br>");
}

function calcArea(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is " + area + "<br>");
}

// Example usages
displayDateTime();
greetUser("John", "Doe");
addTwoNumbers();
calculator(10, 5, '+');
document.write("Square of 5: " + square(5) + "<br>");
document.write("Factorial of 5: " + factorial(5) + "<br>");
displayCounting(1, 10);
calculateHypotenuse(3, 4);
document.write("Area of Rectangle (5, 10): " + areaOfRectangle(5, 10) + "<br>");
document.write("Is 'madam' a palindrome? " + isPalindrome('madam') + "<br>");
document.write("Capitalized: " + capitalizeFirstLetter('the quick brown fox') + "<br>");
document.write("Longest word: " + findLongestWord('Web Development Tutorial') + "<br>");
document.write("Occurrences of 'o': " + countOccurrences('JSResourceS.com', 'o') + "<br>");
calcCircumference(5);
calcArea(5);