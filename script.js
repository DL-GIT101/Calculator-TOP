const buttonsArea = document.querySelector("#buttons");

const buttonValue = ["Clear", "Delete", "+", "-", "*", "/", "7", "8", "9", "4", "5", "6", "1", "2", "3", "00", "0", ".", "="];

// check for the button id on why is not taking the string from the array
for (let btnValue in buttonValue){
    console.log(btnValue);
    const button = document.createElement("button");
    button.setAttribute('id',`${btnValue}`);
    button.style.cssText = 'background-color: hsl(0, 0%, 75%); height:20px;width:20px;';
    buttonsArea.appendChild(button);
}