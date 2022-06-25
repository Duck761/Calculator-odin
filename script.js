let equation = "";
let operators = 0;
let amountofSolves = 0;
let answer = 0;
function operate(num1, num2, operator) {
    
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
    }
    equation = String(answer);
    operators = 1;
}
function add() {
    equation += " + ";
    result.innerHTML = equation;
    operators++;
    if (operators > 1) {
        equation = result.innerHTML;
        checkEquation();
        equation += " + ";
        amountofSolves++;
    }
}

function subtract() {
    equation += " - ";
    result.innerHTML = equation;
    operators++;
    if (operators > 1) {
        checkEquation();
        equation += " - ";
        amountofSolves++;
    }
}

function multiply() {
    equation += " * ";
    result.innerHTML = equation;
    operators++;
    if (operators > 1) {
        checkEquation();
        equation += " * ";
        amountofSolves++;
    }
}

function divide() {
    equation += " / ";
    result.innerHTML = equation;
    operators++;
    if (operators > 1) {
        checkEquation();
        equation += " / ";
        amountofSolves++;
    }
}

function clear() {
    equation = "";
    operators = 0;
    (equation);
    result.innerHTML = equation;
    amountofSolves = 0;
}



for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', () => {
        equation += numberButtons[i].innerHTML;
        result.innerHTML = equation;
    })
}

function checkEquation() {
    let equationArray = equation.split(" ");
        let num1 = parseInt(equationArray[0]);
        let num2 = parseInt(equationArray[2]);
        let operator = equationArray[1];
        operate(num1, num2, operator);
        result.innerHTML = equation;
        equation = String(answer);
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (operatorButtons[i] == plusBTN) {
            add();
        } else if (operatorButtons[i] == minusBTN) {
            subtract();
        } else if (operatorButtons[i] == multiplyBTN) {
            multiply();
        } else if (operatorButtons[i] == divideBTN) {
            divide();
        }
        result.innerHTML = equation;
    })
}


equalsBTN.addEventListener('click', () => {
    checkEquation();
    operators -= 1
});
clearBTN.addEventListener('click', clear);

