const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

let firstNum;
let operator;
let secondNum;

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

//CLEAR BUTTON
const clearBTN = document.querySelector(".operator.clear");
clearBTN.addEventListener("click", () =>{
    bigDisplay.innerText = "0";
})
