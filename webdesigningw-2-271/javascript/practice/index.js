function add()
{
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let sum = a + b;

document.getElementById("result").innerHTML = "Result: " + sum;
}

function subtract()
{
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let sub = a - b;

document.getElementById("result").innerHTML = "Result: " + sub;
}

function multiply()
{
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let mul = a * b;

document.getElementById("result").innerHTML = "Result: " + mul;
}

function divide()
{
let a = Number(document.getElementById("num1").value);
let b = Number(document.getElementById("num2").value);

let div = a / b;

document.getElementById("result").innerHTML = "Result: " + div;
}