const display = document.querySelector(".display");

const buttons = document.querySelectorAll("button");

const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";



const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }
    else if(btnValue === "AC"){
        output = "";
    }
    else if(btnValue === "DEL"){
        output = output.toString().slice(0, -1);
    }
    else if(specialChars.includes(btnValue)){
        output += btnValue;
    }
    else{
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});




/*
const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

  

  if (action === 'decimal') {
    display.textContent = displayedNum + '.'
  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    console.log('equal key!')
  }
  */