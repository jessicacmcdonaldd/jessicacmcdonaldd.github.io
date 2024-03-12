
window.onload = function() {

    const buttons = document.querySelectorAll('.buttons input[type="button"]');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(event) {
        
      });
    });
    
    const display = document.getElementById('display');
    const clear = document.getElementById('clear');
    const percent = document.getElementById('percent');
    const back = document.getElementById('back');
    const fslash = document.getElementById('fslash');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
    const multiply = document.getElementById('multiply');
    const four = document.getElementById('four');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const subtract = document.getElementById('subtract');
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const addition = document.getElementById('addition');
    const zerozero = document.getElementById('zerozero');
    const zero = document.getElementById('zero');
    const decimal = document.getElementById('decimal');
    const equals = document.getElementById('equals');
    
    
    clear.addEventListener('click', () => {
      display.value = '';
    });
    
    percent.addEventListener('click', () => {
      display.value += '%';
    });
    
    back.addEventListener('click', () => {
      display.value = display.value.slice(0, -1);
    });
    
    fslash.addEventListener('click', () => {
      display.value += '/';
    });
    
    seven.addEventListener('click', () => {
      display.value += '7';
    });
    
    eight.addEventListener('click', () => {
      display.value += '8';
    });
    
    nine.addEventListener('click', () => {
      display.value += '9';
    });
    
    multiply.addEventListener('click', () => {
      display.value += '*';
    });
    
    four.addEventListener('click', () => {
      display.value += '4';
    });
    
    five.addEventListener('click', () => {
      display.value += '5';
    });
    
    six.addEventListener('click', () => {
      display.value += '6';
    });
    
    subtract.addEventListener('click', () => {
      display.value += '-';
    });
    
    one.addEventListener('click', () => {
      display.value += '1';
    });
    
    two.addEventListener('click', () => {
      display.value += '2';
    });
    
    three.addEventListener('click', () => {
      display.value += '3';
    });
    
    addition.addEventListener('click', () => {
      display.value += '+';
    });
    
    zerozero.addEventListener('click', () => {
      display.value += '00';
    });
    
    zero.addEventListener('click', () => {
      display.value += '0';
    });
    
    decimal.addEventListener('click', () => {
      display.value += '.';
    });
    
    equals.addEventListener('click', () => {
      display.value = eval(display.value);
    });
    
    };