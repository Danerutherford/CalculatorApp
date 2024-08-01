let btns = document.querySelectorAll('button');
let screenValue = "";

btns.forEach(function (btn) {
    btn.addEventListener('click', function() {
    handleButtonClick(btn.innerText);
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

    switch(btn){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            screenValue = screenValue + btn
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        default:
            break;
    }
    
}
