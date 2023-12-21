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

// do while loop
let userName;

do {
  userName = window.prompt("Enter your name");
} while (userName == "");

console.log("Hello", userName);
