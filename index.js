// Variable
// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// 2 steps
//1. Declaration (var, let, const)
// 2. Assignment (assignment operator)

//3 data types
// let firstName = "Pascal"; //strings
// let age = 21; //number
// let student = true; //boolean
// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "You are " + age + " years old";
// document.getElementById("p3").innerHTML = "Enrolled: " + student;

// let username;
// document.getElementById("myButton").onclick = function () {
//   username = document.getElementById("myText").value;
//   console.log(username);
//   document.getElementById("myLabel").innerHTML = "Hello " + username;
// };

// // type conversion
// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;
// console.log("Happy Birthday! You are", age, "years old");

// let x = 3.14;

// x = Math.round(x);
// console.log(x);

// let a;
// let b;
// let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log("side C:", c);

// document.getElementById("submitButton").onclick = function() {
//   a = document.getElementById("aTextBox").value;
//   a = Number(a);

//   b = document.getElementById("bTextBox").value;
//   b = Number(b);

//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//   document.getElementById("cLabel").innerHTML = "Side C: " + c;
// };

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function () {
//   count -= 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("resetBtn").onclick = function () {
//   count = 0;
//   document.getElementById("countLabel").innerHTML = count;
// };

// document.getElementById("increaseBtn").onclick = function () {
//   count += 1;
//   document.getElementById("countLabel").innerHTML = count;
// };

// math(generating numbers)
// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function () {
//   x = Math.floor(Math.random() * 6) + 1;
//   y = Math.floor(Math.random() * 6) + 1;
//   z = Math.floor(Math.random() * 6) + 1;

//   document.getElementById("xlabel").innerHTML = x;
//   document.getElementById("ylabel").innerHTML = y;
//   document.getElementById("zlabel").innerHTML = z;
//  };

// string properties and methods
// let userName = "Miss Melissa";
// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", "");

// console.log(userName.length);
// console.log(phoneNumber);

// slice() extracts the section of a string and returns it as a new string without modifying the original string

// let fullName = "Blessing Awak";
// let firstName;
// let lastName;

// // firstName = fullName.slice(0, 8);
// // lastName = fullName.slice(8);

// firstName = fullName.slice(0, fullName.indexOf(" "));
// lastName = fullName.slice( fullName.indexOf(" ") + 1);

// console.log(lastName);
// console.log(firstName);

// if statement
// let age = 18;

// if (age >= 28) {
//   console.log("You are old enough.");
// } else {
//   console.log("You are still a teenager.");
// }

// // check property
// document.getElementById("myButton").onclick = function () {
//   const myCheckBox = document.getElementById("myCheckBox");
//   const visaBtn = document.getElementById("visaBtn");
//   const mastercardBtn = document.getElementById("masterCardBtn");
//   const paypalBtn = document.getElementById("paypalBtn");

//   if (myCheckBox.checked) {
//     console.log("You are subscribed");
//   } else {
//     console.log("You are NOT subscribed");
//   }

//   if (visaBtn.checked) {
//     console.log("You are paying with a Visa!");
//   } else if (mastercardBtn.checked) {
//    console.log("You are paying with a Mastercard!");
//   }
//   else if (paypalBtn.checked) {
//    console.log("You are paying with a PayPal!");
//   }
//   else {
//     console.log("You must select a paymet type!");
//   }
// };

// // switch
// let grade = "pizza";
// switch (grade) {
//   case "A":
//     console.log("You did great!");
//   case "B":
//     console.log("You did good!");
//   case "C":
//     console.log("You did okay!");
//   case "D":
//     console.log("You passed ... barely!");
//   case "F":
//     console.log("You FAILED!");
//   default:
//     console.log(grade, "is not a letter grade");
// }

// // while loop
// let userName = "";

// while (userName == "") {
//   userName = window.prompt("Enter your name");
// }
// console.log("Hello", userName);

// // do while loop
// let userName;

// do {
//   userName = window.prompt("Enter your name");
// } while (userName == "");

// console.log("Hello", userName);

// // for loop
// for (let i = 10; i > 0; i -= 1) {
//   console.log(i);
// }

// console.log("HAPPY NEW YEAR!");

// // break - breaks out of a loop entirely
// for (let i = 1; i <= 20; i += 1) {
//   if (i == 13) {
//     break;
//   }
//   console.log(i);
// }

// // continue - it skips an iteration of a loop
// for (let i = 1; i <= 20; i += 1) {
//   if (i == 13) {
//     continue;
//   }
//   console.log(i);
// }

// // nested loop
// for (let i = 1; i <= 3; i += 1) {
//   console.log(i);
// }

// // return
// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is:", area);

// function getArea(width, height) {
//   let result = width * height;
//   return result;
// }

// //  tenary operator
// // condition ? exprIfTrue : exprIfFalse

// checkWinner(false);

// function checkWinner(win) {
//   win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
// }

// //  template literals
// let userName = "Bro";
// let items = 3;
// let total = 75;

// console.log(`Hello, ${userName}!`);
// console.log(`You have, ${items} items in your cart`);
// console.log(`Your total is $${total}`)

// let text = `Hello ${userName}! <br>
// You have, ${items} items in your cart <br>
// Your total is $${total}.`;

// // console.log(text);

// document.getElementById("myLabel").innerHTML = text;

// // toLocaleString

// // number.toLocaleString(locale, {option});

// // 'locale' = specify that language (undefined = default set in)
// // 'option' = object with formatting options

// let myNum = 100;

// myNum = myNum.toLocaleString("en-US"); // US English
// myNum = myNum.toLocaleString("hi-IN"); // Hindi
// myNum = myNum.toLocaleString("de-DE"); // standard German

// myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });
// myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
// myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

// myNum = myNum.toLocaleString(undefined, { style: "percent" });

// myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });

// console.log(myNum);

// // array
// let fruits = ["apple", "orange", "banana"];

// // fruits[2] = "coconut";

// fruits.push("lemon"); //add an element
// fruits.pop(); //removes last element
// fruits.unshift("mango"); //add element to the beginning
// fruits.shift(); //removes first element

// let length = fruits.length;
// let index = fruits.indexOf("apple");

// console.log(index);

// // looping through an array
// let prices = [5, 10, 15, 20, 25];

// // for(let i = prices.length - 1; i >= 0; i-=1) {
// //  console.log(prices[i]);
// // }

// for (let price of prices) {
//   console.log(price);
// }

// //Array of string
// let fruits = ["banana", "apple", "orange", "mango"];

// // fruits = fruits.sort(); //alphabetical
// fruits = fruits.sort().reverse(); //reverse

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// // 2D Array = An Array of Arrays

// let fruits = ["apples", "oranges", "bananas"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meats = ["eggs", "chickens", "fish"];

// let groceryList = [fruits, vegetables, meats];

// groceryList[2][0] = "steak";

// for (let list of groceryList) {
//   for (let food of list) {
//     console.log(food);
//   }
// }

// // spread operator
// /* let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let maximum = Math.min(...numbers);
// console.log(maximum); */

// let class1 = ["Blessing", "Joy", "Hope"];
// let class2 = ["Precious", "Charles", "Fidel"];

// class1.push(...class2);
// console.log(...class1);

// // rest paprameters
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e));

// function sum(...numbers) {
//   let total = 0;
//   for (number of numbers) {
//     total += number;
//   }
//   return total;
// }

// // callback
// // method 1
// // let total = sum(2, 3);
// // displayDOM(total);

// // function sum(x, y) {
// //   let result = x + y;
// //   return result;
// // }

// // method 2
// sum(2, 3, displayDOM);

// function sum(x, y, doSomething) {
//   let result = x + y;
//   doSomething(result);
// }

// function displayConsole(output) {
//   console.log(output);
// }

// function displayDOM(output) {
//   document.getElementById("myLabel").innerHTML = output;
// }

// // array.forEach()
// let students = ["charles", "blessing", "love"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);
// }

// console.log(students[0]);

// function print(element) {
//   console.log(element);
// }

// array.map
let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);

let cubes = numbers.map(cube);

// squares.forEach(print);

cubes.forEach(print);

// function square(element) {
//   return Math.pow(element, 2);
// }

function cube(element) {
  return Math.pow(element, 3);
}

function print(element) {
  console.log(element);
}
