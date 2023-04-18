const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

let first_Num,
    operator,
    second_Num;

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
        first_Num = second_Num = operator = undefined;
        bigDisplay.innerText = display_value;
        smallDisplay.innerText = "0";
        
    }else if(/[+\-*/]/.test(sign)){
        if(first_Num == undefined){
            first_Num = Number(display_value);

            display_value = "0";
            bigDisplay.innerText = display_value;

            operator = sign;
            smallDisplay.innerText = `${first_Num} ${operator}`;

        }else if(second_Num == undefined){
            second_Num = Number(display_value);
            display_value = operate(first_Num,second_Num,operator);

            operator = sign;
            first_Num = display_value;
            smallDisplay.innerText = `${first_Num} ${operator}`;

            display_value = bigDisplay.innerText = "0";
            
            second_Num = undefined;
        }else {
            alert("error in operators");
        }
    }else if(sign == "="){
            if(first_Num == undefined){
                //do nothing
            }else if(second_Num == undefined){
                second_Num = Number(display_value);
                smallDisplay.innerText = `${first_Num} ${operator} ${second_Num} =`;
                
                if(smallDisplay.innerText == "0 / 0 ="){
                    display_value = "Nice Try";
                }else{
                    display_value = operate(first_Num,second_Num,operator);
                }
                
                bigDisplay.innerText = display_value;

                first_Num = second_Num = operator = undefined;
            }else{
                alert("error in =");
            }
    }else{
        alert("error in solving");
    }
}

