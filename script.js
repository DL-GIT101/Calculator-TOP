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

const display = document.querySelector(".text.big");
const btns = document.querySelectorAll('.column>.digit');
for(let btn of btns){
    btn.addEventListener("click", () =>{
        if(display.innerText === "0"){
            if(btn.innerText === "."){
                
            }else{
                display.innerText = "";
            }
        }
        display.innerText += btn.innerText;
    });
}

