let no1 = parseInt(prompt("Enter first number"))
operator = prompt("Select operation: + , - , / , * ")
let no2 = parseInt(prompt("Enter second number"))


if (operator == "+"){
    alert("Your result is" + (no1 + no2))
} 

else if (operator == "-") {
    alert("Your result is" + (no1 - no2))
}

else if (operator == "/") {
    alert("Your result is" + (no1 / no2))
} 

else if (operator == "*") {
    alert("Your result is" + (no1 * no2))
} 
else {
    alert("The requested operation is invalid. Please try again")
}