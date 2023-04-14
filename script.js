const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

let firstNum;
let operator;
let secondNum;
let result;

const operate = (a,b,operator) => {
    switch (operator) {
        case "+":
        a = add(a,b);
            break;
        case "-":
        a = subtract(a,b);
            break;    
        case "*":
        a = multiply(a,b);
            break;
        case "/":
        a = divide(a,b);
            break;    
        default: 
            //put display "Error on operate"
            break;
    }
    return a;
}

const bigDisplay = document.querySelector(".text.big");
const digitBTNs = document.querySelectorAll('.column>.digit');

for(let digit of digitBTNs){
    digit.addEventListener("click", () =>{
        display(digit.innerText);
    });
}

const display = (digit) => {
    let bigDisplayText = bigDisplay.innerText;
    if(firstNum != undefined && operator != undefined){
        bigDisplay.innerText = "";
    }
    if(bigDisplayText == "0"){
        if(digit == "00"){
            bigDisplay.innerText = "0";
        }else if(digit == "."){
            bigDisplay.innerText += digit;
        }
        else{
            bigDisplay.innerText = "";
            bigDisplay.innerText += digit;
        }
    }else if(bigDisplayText.includes(".") == true && digit == "."){
        //none
    }
    else {
        bigDisplay.innerText += digit;
    }
}

const operatorBTN = document.querySelectorAll(".column>.operator");

for(let operator of operatorBTN){
    operator.addEventListener("click", () => {
        operation(operator.innerText);
    });
}

const operation = (operator_clicked) => {
    if(operator_clicked == "C"){
        bigDisplay.innerText = "0";
        firstNum = undefined;
        operator = undefined;
        secondNum = undefined;
    }else if(operator_clicked.match(/[+\-*/]/)){
        firstNum = bigDisplay.innerText;
        operator = operator_clicked;
    }else if(operator_clicked == "="){
        if(secondNum == undefined){
           //none
        }else{
            secondNum = bigDisplay.innerText;
            result = operate(firstNum,secondNum,operator_clicked);
            alert(result);
        }
    }else{
        alert("error in fn operation");
    }
}