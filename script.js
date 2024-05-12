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
function maxOfThree(17, 4, 9){

}

console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));


// Exercise 9
//function calculateTip(billAmount, tipPercentage) {
  //  const billAmount = 20.00
    //const tipPercentage = 50
    //return (billAmount + tipPercentage);
//}

//console.log('Exercise 9 Result:', calculateTip(50, 20));