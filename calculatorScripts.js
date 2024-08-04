
//To Do (things to try)
//1)Need computed value flag, so when a user does a computation and then presses another number,
//The screen will replace that computed value with the newly selected number.
//
//2) Compute when a sign in followed by another operation character and not just when
// '=' is selected
//


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
            break;
        case '+':
            screenValue += btn;
            break;
        case '-':
            screenValue += btn;
            break;
        case '*':
            screenValue += btn;
            break;
        case '/':
            screenValue += btn;
            break;
        case '.':
            screenValue += btn;
            break;
        case '=':
            handleCalculation(screenValue);
            break;
        case 'BS':
             screenValue = screenValue.slice(0, screenValue.length -1);
             break;
        case 'C':
            screenValue = "";
            break;
        default:
            break;
    }

    if(screenValue.length === 0){
        document.getElementById('calcScreen').innerText = '0'
     }else{
        document.getElementById('calcScreen').innerText = screenValue;
     }
    
}


function handleCalculation(screenVal){
    let runningTotal = 0;
    let sign = "";
    let previousValue = null;
    for(let char of screenVal){
        let currentValue = 0;
        if(char === '+' || char === '-' || char === '*' || char === '/' ){
            sign = char;
            splitTest = screenVal.split(sign);

            if(previousValue === null){
                previousValue = parseFloat(splitTest[0]);
            } else{
                previousValue = runningTotal;
            }
            currentValue = parseFloat(splitTest[1]);

            switch(sign){
                case '+':
                    runningTotal =  Add(previousValue, currentValue);
                    break;
                case '-':
                    runningTotal =  Subtract(previousValue,currentValue);
                    break;
                case '*':
                    runningTotal =  Multiply(previousValue,currentValue);
                    break;
                case '/':
                    runningTotal =  Divide(previousValue,currentValue);
                    break;
                default:
                    break;
            }
        }
    }

    screenValue = runningTotal.toString();
    document.getElementById('calcScreen').innerText = screenValue;
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
