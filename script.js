const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if(age >= 18){
        return 'Adult'
    } else {
        return 'Minor'
    }
}

console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3
function isCharAVowel(char) {
    const vowels = 'aeiou';
    return vowels.includes(char) && char !== 'y';
}
console.log('Exercise 3 Result:', isCharAVowel("a"));



// Exercise 4
function generateEmail(name , domain) {
    return name + '@' + domain;
}
    console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


// Exercise 5
function greetUser(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`
}
   
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


// Exercise 6
function reverseString(str) {
    const reversed = str.split("").reverse("").join("");
    return reversed
}
console.log('Exercise 6 Result:', reverseString("rockstar"));


// Exercise 7
function checkPalindrome(String){
    return String === String.split('').reverse('').join('');
}
console.log('Exercise 7 Result:', checkPalindrome("radar"));


// Exercise 8
function maxOfThree(n1, n2, n3){
    if (n1 > n2 && n1 > n3){
        return n1
    
    } else if (n2 > n1 && n2 > n3){
        return n2
    }
        else {
            return n3
        }

}

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));


// Exercise 9
function calculateTip(billAmount, tipPercentage) {
    billAmount = 20
    tipPercentage = 50
    return (billAmount + tipPercentage);
}

console.log('Exercise 9 Result:', calculateTip(50, 20));

// Exercise 10
function convertTemperature(temperature, scale) {
    if (scale === 'C') {
        // Convert Celsius to Fahrenheit
        return (temperature * 9 / 5) + 32;
    } else if (scale === 'F') {
        // Convert Fahrenheit to Celsius
        return (temperature - 32) * 5 / 9;
    } else {
        // Handle invalid scale
        return "Invalid scale. Please provide 'C' for Celsius or 'F' for Fahrenheit.";
    }
}
console.log('Exercise 10 Result:', convertTemperature(32, "C"));

// Exercise 11
function basicCalculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Error: Invalid operation!";
    }
}
console.log('Exercise 11 Result:', basicCalculator(10, 5, "subtract"));

// Exercise 12
function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log('Exercise 12 Result:', calculateGrade(85));

// Exercise 13





// Exercise 14