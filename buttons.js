const oneBTN = document.getElementById("btn1");
const twoBTN = document.getElementById("btn2");
const threeBTN = document.getElementById("btn3");
const fourBTN = document.getElementById("btn4");
const fiveBTN = document.getElementById("btn5");
const sixBTN = document.getElementById("btn6");
const sevenBTN = document.getElementById("btn7");
const eightBTN = document.getElementById("btn8");
const nineBTN = document.getElementById("btn9");
const zeroBTN = document.getElementById("btn0");
const clearBTN = document.getElementById("clearbtn");
const equalsBTN = document.getElementById("btnequals");
const plusBTN = document.getElementById("btnplus");
const minusBTN = document.getElementById("btnminus");
const multiplyBTN = document.getElementById("btnmultiply");
const divideBTN = document.getElementById("btndivide");
const result = document.getElementById('result');
const numberButtons = [oneBTN, twoBTN, threeBTN, fourBTN, fiveBTN, sixBTN, sevenBTN, eightBTN, nineBTN, zeroBTN];
const operatorButtons = [plusBTN, minusBTN, multiplyBTN, divideBTN];
const topButtons = [clearBTN];
const allButtons = [oneBTN, twoBTN, threeBTN, fourBTN, fiveBTN, sixBTN, sevenBTN, eightBTN, nineBTN, zeroBTN, clearBTN, equalsBTN, plusBTN, minusBTN, multiplyBTN, divideBTN];

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('mouseover', () => {
        allButtons[i].style.transform = "scale(0.9)";
    });
    allButtons[i].addEventListener('mouseout', () => {
        allButtons[i].style.transform = "scale(1)";
    });
    allButtons[i].addEventListener('mousedown', () => {
        allButtons[i].style.transform = "scale(1)";
    })
    allButtons[i].addEventListener('mouseup', () => {
        allButtons[i].style.transform = "scale(0.9)";
    });
}