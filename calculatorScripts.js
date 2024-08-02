
//To Do (things to try)
//1)Need computed value flag, so when a user does a computation and then presses another number,
//The screen will replace that computed value with the newly selected number.
//
//2) Compute when a sign in followed by another operation character and not just when
// '=' is selected
//
//3) Implement operation on negative numbers


let btns = document.querySelectorAll('button');
let screenValue = "";

btns.forEach(function (btn) {
    btn.addEventListener('click', function() {
    handleButtonClick(btn.innerText);
  });
});


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
            screenValue += btn
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        case '+':
            screenValue += btn;
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        case '-':
            screenValue += btn;
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        case '*':
            screenValue += btn;
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        case '/':
            screenValue += btn;
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        case '=':
            let operation = screenValue[screenValue.length - 2];
            if(operation === "+"){
                handleEqualSign(screenValue, operation);
            }
            if(operation === "-"){
                handleEqualSign(screenValue, operation);
            }
            if(operation === "*"){
                handleEqualSign(screenValue, operation);
            }
            if(operation === "/"){
                handleEqualSign(screenValue, operation);
            }
            
            break;
        case 'BS':
             //screenValue = screenValue.slice(0 , screenValue[screenValue.length -1]);
             break;
        case 'C':
            screenValue = "";
            document.getElementById('calcScreen').innerText = '0';
        default:
            break;
    }
    
}


function handleEqualSign(screenVal,sign){
    let newScreenValue = "";
    switch(sign){
        case '+':
            splitTest = screenVal.split('+');
            newScreenValue =  Add(parseInt(splitTest[0]), parseInt(splitTest[1]));
            screenValue = newScreenValue;
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        case '-':
            splitTest = screenVal.split('-');
            newScreenValue =  Subtract(parseInt(splitTest[0]),parseInt(splitTest[1]));
            screenValue = newScreenValue;
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        case '*':
            splitTest = screenVal.split('*');
            newScreenValue =  Multiply(parseInt(splitTest[0]),parseInt(splitTest[1]));
            screenValue = newScreenValue;
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        case '/':
            splitTest = screenVal.split('/');
            newScreenValue =  Divide(parseInt(splitTest[0]),parseInt(splitTest[1]));
            screenValue = newScreenValue;
            document.getElementById('calcScreen').innerText = screenValue;
            break;
        default:
            break;
    }
}


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
    if(num1 === 0 || num2 === 0){
        return 0;
    }

    return num1 / num2;
}

function Square(num1){
    return num1 * num1
}

function Cube(num1){ 
    return num1 * num1 * num1
}
