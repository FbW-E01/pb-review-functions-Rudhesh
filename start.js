
// 1. Write a normal function that takes in two numbers and *returns* the sum of those numbers.

function sumOfTwoNum(a, b) {

    return a + b;

}

console.log(sumOfTwoNum(3, 7));

// 2. Write a normal function that takes in a string and *returns* that string capitalized.

function stringCapitalized(str) {
    return str.toUpperCase()
}

console.log(stringCapitalized("hello world"))

// 3. Write a normal function that takes in an array and *returns* the last item in that array.

const fruit = ["mango", "banana", "apple", "grape", "orange"];

function lastItem(array) {
    let items = array.pop()
    return items
}

console.log(lastItem(fruit));


// 4. Write an arrow function that takes in an array and *returns* the first item in that array.

const cars = ["ferrari", "jaguar", "BMW", "Ford", "audi", "mustang"]

let firstItem = (items) => {
    const firstItem = items.shift()
    return firstItem;
}

console.log(firstItem(cars));

// 5. Write an arrow function that takes in a string and *returns* the last three characters of that string.

const lastThreeCharacter = (str) => {

    let characters = str.substring(str.length - 3)
    return characters;
}

console.log(lastThreeCharacter("how are you"));

// 6. Write an arrow function that takes in an array and *returns* the type of the first item in that array.

const user = ["Rudhesh", 28, true]

const typeOfItem = (arr) => {

    const firstItem = user[0];

    return typeof firstItem
}

console.log(typeOfItem(user));

// 7. Write an arrow function that takes in an array and *returns* true, if all items in that array have the same type.

const colors = ["red", "green", "blue", "orange", "brown", "mint", "yellow", "cream", "gray", "black"]


const checkType = (item) => {
let result = item.every(function (e) {
    if (typeof e === typeof item[0]) {
        return true;
        }
        return false;
})
     return result;    
}
    
console.log(checkType(colors));

// 8. Print the `type` of a variable that has a normal function value.
console.log(typeof sumOfTwoNum)

// 9. Print the `type` of a variable that has an arrow function value.

console.log(typeof checkType)

// 10. Write and test a function that takes in two parameters (min and max). That function should return another function that doesn't take in any parameters, but returns a random number between min and max. Effectively your "outer" function is a factory that creates customized random number generator functions.

function numGenerator(min, max) {

    return function () {
      return  Math.floor(Math.random() * (max - min) + min)
    }
    
}
const randomNum = numGenerator(10,20)
const result = randomNum()
console.log(result);

// 11. In your own words, explain what are side effects and what is a pure function.

// Pure functions are functions that accept an input and returns a value without modifying any data outside its scope



// 12. In your own words, explain what is the difference between functions and methods.

// Functions and methods are the same in JavaScript, but a method is a function, which is a property of an object.