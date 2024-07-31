let btns = document.querySelectorAll('button');

btns.forEach(function (btn) {
    btn.addEventListener('click', function() {
    handleButtonClick(btn.textContent);
  });
});

function Add(num1, num2){
    return num1 + num2;
}

function Subtract(num1, num2){
    return num1 - num2;
}

function Multiply(num1, num2){
    return num1 * num2;
}

function Divide(num1, num2){
    return num1 / num2;
}

function Square(num1){
    return num1 * num1
}

function Cube(num1){ 
    return num1 * num1 * num1
}

function handleButtonClick(btn){
    
}
