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

// // array.map
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);

// let cubes = numbers.map(cube);

// squares.forEach(print);

// cubes.forEach(print);

// function square(element) {
//   return Math.pow(element, 2);
// }

// function cube(element) {
//   return Math.pow(element, 3);
// }

// function print(element) {
//   console.log(element);
// }

// // array.filter
// let ages = [18, 21, 16, 17, 19, 30];
// let adults = ages.filter(checkAge);

// adults.forEach(print);

// function checkAge(element) {
//   return element >= 18;
// }

// function print(element) {
//   console.log(element);
// }

// // array.reduce
// let prices = [5, 10, 15, 20, 25, 30];
// total = prices.reduce(checkOut);

// console.log(`The total is: $${total}`);

// function checkOut(total, element) {
//   return total + element;
// }

// // array.sort
// let grades = [100, 50, 90, 60, 80, 70];

// grades = grades.sort(descendingSort);

// grades.forEach(print);

// function descendingSort(x, y) {
//   return y - x;
// }

// function print(element) {
//   console.log(element);
// }

// // function expression
// let count = 0;

// document.getElementById("increaseButton").onclick = function () {
//   count += 1;
//   document.getElementById("myLabel").innerHTML = count;
// };

// document.getElementById("decreaseButton").onclick = function () {
//   count -= 1;
//   document.getElementById("myLabel").innerHTML = count;
// };

// // arrow function
// const greeting = userName => console.log(`Hello ${userName}`);

// greeting("my Love");

// const percent = (x, y) => (x / y) * 100;

// console.log(`${percent(37, 50)}%`);

// let grades = [100, 50, 90, 70, 60, 80];

// grades.sort((x, y) => y - x);
// grades.forEach((element) => console.log(element));

// // shuffle elements of an Array
// let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// // to shuffle the cards
// shuffle(cards);

// console.log(cards[0]);
// cards.forEach((card) => console.log(card));

// function shuffle(array) {
//   let currentIndex = array.length;

//   while (currentIndex != 0) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
// }

// // nested function
// let userName = "Charles";
// let userInbox = 0;

// login();

// function login() {
//   displayUserName();
//   displayUserInbox();

//   function displayUserName() {
//     console.log(`Welcome ${userName}`);
//   }

//   function displayUserInbox() {
//     console.log(`You have ${userInbox} new messages`);
//   }
// }

// //Map

// const store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 30],
//   ["socks", 10],
//   ["underwear", 50],
// ]);

// let shoppingCart = 0;
// shoppingCart += store.get("t-shirt");
// shoppingCart += store.get("underwear");

// console.log(shoppingCart);

// store.set("hat", 40); //adds item
// store.delete("t-shirt"); // removes an item
// console.log(store.has("t-shirt")); //to check for availability returns boolean
// console.log(store.has("underwear"));
// console.log(store.size);

// store.forEach((value, key) => console.log(`${key} $${value}`));

// // object

// const car1 = {
//   properties
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//    methods
//   drive: function () {
//     console.log("You drive the car");
//   },

//   brake: function () {
//     console.log("You step on the brakes");
//   },
// };

// console.log(car1.model);
// console.log(car1.color);
// console.log(car1.year);

// car1.drive();
// car1.brake();

// const car2 = {
//   properties
//   model: "Corvette",
//   color: "blue",
//   year: 2024,

//   methods
//   drive: function () {
//     console.log("You drive the car");
//   },

//   brake: function () {
//     console.log("You step on the brakes");
//   },
// };

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// car2.drive();
// car2.brake();

// // this
// const car1 = {
//   //properties
//   model: "Mustang",
//   color: "red",
//   year: 2023,

//   //methods
//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

// const car2 = {
//   //properties
//   model: "Corvette",
//   color: "blue",
//   year: 2024,

//   //methods
//   drive: function () {
//     console.log(`You drive the ${this.model}`);
//   },
// };

// car1.drive();
// car2.drive();

// //class
// class player {
//   score = 0;

//   pause() {
//     console.log("You paused the game");
//   }

//   exit() {
//     console.log("You exited the game");
//   }
// }

// const player1 = new player();
// const player2 = new player();

// player1.score += 1;

// console.log(player1.score);
// console.log(player2.score);

// player1.pause();
// player2.exit();

// // constructor
// class student {
//   constructor(name, age, gpa) {
//     this.name = name;
//     this.age = age;
//     this.gpa = gpa;
//   }
//   study() {
//     console.log(`${this.name} is studying`);
//   }
// }

// const student1 = new student("Charles", 29, 4.16);
// const student2 = new student("Blessing", 29, 3.88);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);

// student1.study();

// console.log(student2.name);
// console.log(student2.age);
// console.log(student2.gpa);

// student2.study();

// // static
// class Car {
//   static numberOfCars = 0;
//   constructor(model) {
//     this.model = model;
//     Car.numberOfCars += 1;
//   }
//   static startRace() {
//     console.log("3...2...1...GO!");
//   }
// }

// const car1 = new Car("Mustang");
// const car2 = new Car("Corvette");
// const car3 = new Car("BMW");

// console.log(Car.numberOfCars);

// Car.startRace();

// // inheritance
// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }

//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }
// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }

// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }

// class Hawk extends Animal {
//   name = "hawk";

//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// console.log(fish.swim());
// fish.eat();
// fish.sleep();
// fish.swim();

// console.log(hawk.fly());
// hawk.eat();
// hawk.sleep();
// hawk.fly();

// // super
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
// }

// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
// }

// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.runSpeed = flySpeed;
//   }
// }

// const rabbit = new Rabbit("rabbit", 2, 40);
// const fish = new Fish("fish", 2, 80);
// const hawk = new Hawk("hawk", 3, 400);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

// array of object
// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }

//   drive() {
//     console.log(`You drive the ${this.model}`);
//   }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// const cars = [car1, car2, car3];
// console.log(cars[0].year);
// console.log(cars[1].year);
// console.log(cars[2].year);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

// // get and set
// class Car {
//   constructor(power) {
//     this._gas = 50;
//     this._power = power;
//   }
//   get power() {
//     return `${this._power}hp`;
//   }
//   get gas() {
//     return `${this._gas}L (${(this._gas / 50) * 100}%)`;
//   }
//   set gas(value) {
//     if (value > 50) {
//       value = 50;
//     } else if (value < 0) {
//       value = 0;
//     }
//     this._gas = value;
//   }
// }

// let car = new Car(400);

// car.gas = 100;

// console.log(car.power);
// console.log(car.gas);

// // passing object to a function as an argument
// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// changeColor(car3, "purple");
// displayInfo(car3);

// function displayInfo(car) {
//   console.log(car.model);
//   console.log(car.year);
//   console.log(car.color);
// }

// function changeColor(car, color) {
//   car.color = color;
// }

// // Array of objects
// class Car {
//   constructor(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }

//   drive() {
//     console.log(`You drive the ${this.model}`);
//   }
// }

// const car1 = new Car("Mustang", 2023, "red");
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");
// const car4 = new Car("Ferrari", 2025, "white");

// const cars = [car1, car2, car3, car4];

// // cars[0].drive();
// // cars[1].drive();
// // cars[2].drive();

// // a function to loop over the element of the array "const cars = []" and invoke the drive() method of each element.
// startRace(cars);

// function startRace(cars) {
//   for (const car of cars) {
//     car.drive();
//   }
// }

// // anonymous objects

// class Card {
//   constructor(value, suit) {
//     this.value = value;
//     this.suit = suit;
//   }
// }

// let cards = [
//   new Card("A", "Hearts"),
//   new Card("A", "Spades"),
//   new Card("A", "Diamonds"),
//   new Card("A", "Clubs"),
//   new Card("2", "Hearts"),
//   new Card("2", "Spades"),
//   new Card("2", "Diamonds"),
//   new Card("2", "Clubs"),
// ];

// cards.forEach((card) => console.log(`${card.value} ${card.suit}`));

// // error
// try {
//   let x = window.prompt("Enter a number");
//   x = Number(x);

//   if (isNaN(x)) throw "That wasn't a Number!";
//   if (x == "") throw "That was empty";

//   console.log(`${x} is a number`);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("This always execute");
// }

// // setTimeout()

// let timer1 = setTimeout(firstMessage, 3000);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// function firstMessage() {
//   alert(`Buy this course for $500`);
// }
// function secondMessage() {
//   alert(`This is not a scam`);
// }
// function thirdMessage() {
//   alert(`DO IT!`);
// }

// document.getElementById("myButton").onclick = function () {
//   clearTimeout(timer1);
//   clearTimeout(timer2);
//   clearTimeout(timer3);
//   alert(`Thanks for buying <3`);
// };

// // setInterval
// let count = 0;
// let max = window.prompt("Count up to what #?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp() {
//   count += 1;
//   console.log(count);

//   if (count >= max) {
//     clearInterval(myTimer);
//   }
// }

// // date object
// let date = new Date();

// // date = date.toLocaleString();
// document.getElementById("myLabel").innerHTML = formatTime(date);

// function formatDate(date) {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();

//   return `${month}/${day}/${year}`;
// }

// function formatTime(date) {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let amOrPm = hours >= 12 ? "pm" : "am";

//   hours = hours % 12 || 12; //converts time from military to standard

//   return `${hours}:${minutes}:${seconds} ${amOrPm}`;
// }

// // asynchronous code
// console.log("START");
// setTimeout(() => console.log("This is asynchronous"), 5000);
// console.log("END");

// // console.time
// // start
// console.time("Response time");

// // alert("CLICK THE OK BUTTON");
// setTimeout(() => console.log("HELLO!"), 3000);

// // end
// console.timeEnd("Resonse time");

// // promises

// const promise = new Promise((resolve, reject) => {
//   let fileLoaded = false;

//   if (fileLoaded) {
//     resolve("fileLoaded");
//   } else {
//     reject("File NOT loaded");
//   }
// });

// promise.then((value) => console.log(value))
//        .catch((error) => console.log(error));

// const promise = new Promise((resolve) => {
//   setTimeout(resolve, 5000);
// });

// promise.then(() => console.log("Thanks for waiting!"));

// const wait = time => new Promise((resolve) => {
//   setTimeout(resolve, time);
// });

// wait(3000).then(() => console.log("Thanks for waiting!"));

// // async
// async function loadFile() {
//   let fileLoaded = false;

//   if (fileLoaded) {
//     return"fileLoaded";
//   } else {
//     throw "File NOT loaded";
//   }
// }

// loadFile().then((value) => console.log(value))
//   .catch((error) => console.log(error));

// // await
// async function loadFile() {
//   let fileLoaded = true;

//   if (fileLoaded) {
//     return "fileLoaded";
//   } else {
//     throw "File NOT loaded";
//   }
// }

// async function startProcess() {
//   try {
//     let message = await loadFile();
//     console.log(message);
//   } catch (error) {
//     console.log(error);
//   }
// }
// startProcess();

// // modules
// import { PI, getCircumference, getArea } from "./math_util.js";

// console.log(PI);

// let circumference = getCircumference(10)
// console.log(circumference);

// let area = getArea(10)
// console.log(area);

// // or
// import * as MathUtil from './math_util.js'

// console.log(MathUtil.PI);

// let circumference = MathUtil.getCircumference(10)
// console.log(circumference);

// let area = MathUtil.getArea(10)
// console.log(area);

// // DOM
// console.log(document.title);
// console.log(document.URL);

// document.title = "Title goes here";
// document.location = "https://www.google.com";

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "Hello";

// // how to select element in a web page
// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgreen";

// let fruits = document.getElementsByName("fruits");

// fruits.forEach((fruit) => {
//   if (fruit.checked) {
//     console.log(fruit.value);
//   }
// });

// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor = "lightgreen";

// let desserts = document.getElementsByClassName("desserts");
// desserts[2].style.backgroundColor = "lightgreen";

// let element = document.querySelector("[for]");
// element.style.backgroundColor = "lightgreen";

// let elements = document.querySelectorAll("li");
// elements.forEach((element) => {
//   element.style.backgroundColor = "lightgreen";
// });

// // add/change HTML elements
// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name");
// document.body.append(nameTag); //append: to add an object(last-child)

// // change css property
// const title = document.getElementById("myTitle");
// title.style.backgroundColor = "red";
// title.style.color = "#fff";
// title.style.textAlign = "center";
// title.style.fontSize = "15rem";
// title.style.border = "5px solid #000";

// event

// const element = document.getElementById("myButton");
// const element = document.body;
// const element = document.getElementById("myText");
// const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;

// function doSomething() {
//   // alert("Thank you!");
//   element.style.backgroundColor = "red";
// }
// function doSomethingElse() {
//   // alert("Thank you!");
//   element.style.backgroundColor = "lightgreen";
// }

// // .addEventListener
// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");

// // innerDiv.addEventListener("mouseover", changeRed);
// // innerDiv.addEventListener("mouseout", changeGreen);

// // function changeRed() {
// //   innerDiv.style.background = "red";
// //   innerDiv.style.borderRadius = "50px";
// // }

// // function changeGreen() {
// //   innerDiv.style.background = "lightGreen";
// //   innerDiv.style.borderRadius = "0";
// // }

// // useCapture //if 2 elements are taking the same space, and they are listening for the same event. You can specify which 1 as preference.
// innerDiv.addEventListener("click", changeBlue);
// outerDiv.addEventListener("click", changeBlue, true);

// function changeBlue() {
//   alert(`You selected ${this.id}`);
//   this.style.backgroundColor = "lightblue";
// }

// // show and hide HTML element
// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("#myImg");

// myButton.addEventListener("click", () => {
//   if (myImg.style.visibility == "hidden") {
//     myImg.style.visibility = "visible";
//   } else {
//     myImg.style.visibility = "hidden";
//   }
// });

// // detect key presses
// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(event) {
//   switch (event.key) {
//     case "ArrowDown":
//       y += 5;
//       myDiv.style.top = y + "px";
//       break;
//     case "ArrowUp":
//       y -= 5;
//       myDiv.style.top = y + "px";
//       break;
//     case "ArrowRight":
//       x += 5;
//       myDiv.style.left = x + "px";
//       break;
//     case "ArrowLeft":
//       x -= 5;
//       myDiv.style.left = x + "px";
//       break;
//   }
// }

//// Animation
// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", begin);

// function begin() {
//   let timerId = null;
// let x = 0;
// let y = 0;

//// rotation
// let degrees = 0;
// let x = 0;
// let y = 0;

//// scaling the element
// let scaleX = 1; //1 means 100%
// let scaleY = 1; //1 means 100%

// setInterval(frame, 5);

// function frame() {
// if (x >= 200 || y >= 200) {
//   clearInterval(timerId);
// } else {
//   x += 1;
//   y += 1;
//   myAnimation.style.left = x + "px";
//   myAnimation.style.top = y + "px";
// }

//// rotation
// if (x >= 500 || y >= 500) {
//   clearInterval(timerId);
// } else {
//   degrees += 3;
//   x += 1;
//   y += 1;
//   myAnimation.style.left = x + "px";
//   myAnimation.style.top = y + "px";
//   myAnimation.style.transform = "rotateZ(" + degrees + "deg)";
// }

//// scaling the element
//     function frame() {
//       if (scaleX >= 2 || scaleY >= 2) {
//         clearInterval(timerId);
//       } else {
//         scaleX += 0.01;
//         scaleY += 0.01;
//         myAnimation.style.transform = "scale(" + scaleX + "," + scaleY + ")";
//       }
//     }
//   }
// }

//// Canvas API
// let canvas = document.getElementById("myCanvas");
// let context = canvas.getContext("2d");

// context.strokeStyle = "gold";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250, 250);
// context.stroke();

// // Draw Triangle
// context.strokeStyle = "purple";
// context.fillStyle = "pink";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.stroke();
// context.fill();

//// draw rectangle
// context.fillStyle = "black";
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250);

// context.fillStyle = "red";
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250);

// context.fillStyle = "green";
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 250);

// context.fillStyle = "yellow";
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 0, 250, 250);

//// draw circle
//(x, y, r, sAngle, eAngle, counterclockwise)
// context.fillStyle = "brown";
// context.strokeStyle = "green";
// context.lineWidth = 20;
// context.beginPath();
// // context.arc(250, 250, 200, 3, 2 * Math.PI);
// context.arc(250, 250, 200, 0, 2 * Math.PI);
// context.stroke();
// context.fill();

// // draw text
// context.font = "50px MV Boli";
// context.fillStyle = "grey";
// context.textAlign = "center";
// context.fillText("YOU WIN!!!", canvas.width / 2, canvas.height / 2);

////  window object
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(window.location.href);
// window.location.href = "https://google.com";
// console.log(window.location.hostname);
// console.log(window.location.pathname);
// const myButton = document.querySelector("#myButton");
// myButton.addEventListener("click", () => window.open("https://google.com"));
// myButton.addEventListener("click", () => window.close());
// myButton.addEventListener("click", () => window.print());

// window.alert("Hello");
// window.confirm("Press OK to continue!");
// let age = window.prompt("Enter your age");
// if (age < 18) {
//   window.alert("You must be 18+ to visit this site");
//   window.close();
// }

// cookies

// const firstName = document.querySelector("#firstText");
// const lastName = document.querySelector("#lastText");
// const submitBtn = document.querySelector("#submitBtn");
// const cookieBtn = document.querySelector("#cookieBtn");

// submitBtn.addEventListener("click", () => {
//   setCookie("firstName", firstText.value, 365);
//   setCookie("lastName", lastText.value, 365);
// });

// cookieBtn.addEventListener("click", () => {
//   firstText.value = getCookie("firstName");
//   lastText.value = getCookie("lastName");
// });

// deleteCookie("firstName");
// deleteCookie("lastName");

// console.log(navigator.cookieEnabled);
// document.cookie =
//   "firstName=SpongeBob; expires=thur, 1 February 2024 12:00:00 GMT; path=/";
// document.cookie =
//   "lastName=SquarePants; expires=thur, 1 February 2024 12:00:00 GMT; path=/";
// console.log(document.cookie);

// deleteCookie("firstName");
// deleteCookie("lastName");
// deleteCookie("email");

// setCookie("email", "Sponge@gmail.com", 365);

// console.log(document.cookie);

// setCookie("firstName", "SpongeBob", 365);
// setCookie("lastName", "SquarePants", 365);

// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

// function setCookie(name, value, daysToLive) {
//   const date = new Date();
//   date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `${name}=${value}; ${expires}; path=/`;
// }

// // delete cookie
// function deleteCookie(name) {
//   setCookie(name, null, null);
// }

// // getting value of cookie by name
// function getCookie(name) {
//   const cDecoded = decodeURIComponent(document.cookie);
//   const cArray = cDecoded.split(";");
//   console.log(cArray);
//   let result = null;

//   cArray.forEach((element) => {
//     if (element.indexOf(name) == 0) {
//       result = element.substring(name.length + 1);
//     }
//   });
//   return result;
// }

// stopwatch
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
pauseBtn.addEventListener("click", () => {});
resetBtn.addEventListener("click", () => {});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
