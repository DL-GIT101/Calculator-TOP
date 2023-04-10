const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const btns = document.querySelectorAll('.column>button');
for(let btn of btns){
    console.log(btn.innerText);
}
