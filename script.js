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
    bigDisplay.innerText = display_value;
}

const smallDisplay = document.querySelector(".text.small");
let smallDisplayText = smallDisplay.innerText;

//operator buttons plus C
const operatorBTN = document.querySelectorAll(".operator");

for(let sign of operatorBTN){
    sign.addEventListener('click', () =>{
        solving(sign.innerText);
    });
}

const solving = (sign) => {
    if(sign == "C"){
        display_value = "0";
        first_Num = undefined;
        second_Num = undefined;
        operator = undefined;
        bigDisplay.innerText = display_value;
        smallDisplay.innerText = "0";
    }else if(sign.match(/[+\-*/]/)){
        if(first_Num == undefined){
            first_Num = Number(display_value);

            display_value = "0";
            bigDisplay.innerText = display_value;

            operator = sign;
            smallDisplay.innerText = `${first_Num} ${operator}`;
        }else if(second_Num == undefined){
            second_Num = Number(display_value);
            smallDisplay.innerText = `${first_Num} ${operator} ${second_Num} =`;
            
            display_value = operate(first_Num,second_Num,operator);
            bigDisplay.innerText = display_value;

            first_Num = display_value;
            second_Num = undefined;
            operator = sign;

        }
    }else if(sign == "="){
            if(operator == undefined){
                //do nothing
            }else if(second_Num == undefined){
                second_Num = Number(display_value);
                smallDisplay.innerText = `${first_Num} ${operator} ${second_Num} =`;
                
                display_value = operate(first_Num,second_Num,operator);
                bigDisplay.innerText = display_value;
            }
    }else{
        alert("error in solving");
    }
}

