let age = window.prompt("How old are you?");
console.log("Before conversion:", age, typeof age);

age = Number(age);
console.log("After conversion:", age, typeof age);

age += 1;
console.log("Next year, you will be:", age);

let x = "Pizza";
let y = "10";
let z = true;

console.log(Number(x), typeof Number(x));
console.log(String(y), typeof String(y));
console.log(Boolean(z), typeof Boolean(z));

let userInput = window.prompt("Enter something:");
let isEmpty = Boolean(userInput);
if (!isEmpty){
    console.log("User did not enter anything.");
}else{
    console.log("User entered:", userInput);
}

let numString = "50";
let convertedNum = Number(numString);

document.getElementById("output").textContent = `Converted "${numString}" to a number: ${convertedNum}`;
