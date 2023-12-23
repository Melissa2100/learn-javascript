// const answer = Math.floor(Math.random() * 10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function () {
//   let guess = document.getElementById("guessField").value;
//   guesses += 1;

//   if (guess == answer) {
//     alert(`${answer} is the #. It took you ${guesses} guesses`);
//   } else if (guess < answer) {
//     alert("Too small!");
//   } else {
//     alert("Too large!");
//   }
// };

// converting temp
let temp = 32;
temp = toCelsius(temp);
console.log(temp);

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
