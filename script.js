const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

let first_Num;
let operator;
let second_Num;

const operate = (a,b,operator) => {
    let result;
    switch (operator) {
        case "+":
            result = add(a,b);
            break;
        case "-":
            result = subtract(a,b);
            break;    
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;    
        default: 
            alert("error in operate");
            break;
    }
    return result;
}
// big display
const bigDisplay = document.querySelector(".text.big");
let bigDisplayText = bigDisplay.innerText;
// buttons for digits
const digitBTNs = document.querySelectorAll('.row>.digit');

for(let digit of digitBTNs){
    digit.addEventListener("click", () =>{
        display_In_Big(digit.innerText);
    });
}
// check the previous function for reference
let display_value = "0";
const display_In_Big = (digit) => {
    if(digit == "."){
        if(display_value == "0"){

        }else if(display_value.includes(".") == true){
            digit = "";
        }
    }else if(display_value == "0"){
        display_value = "";
    }

    display_value += digit;
    console.log(`display_value: ${display_value}  digit: ${digit}`)
    bigDisplay.innerText = display_value;
}

const operatorBTN = document.querySelectorAll(".column>.operator");
