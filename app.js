const container = document.querySelector('#keys');
const display = document.querySelector('#display')

const ROWS = 4;
const COLUMNS = 4;
container.style.setProperty('--grid-rows', ROWS);
container.style.setProperty('--grid-cols', COLUMNS);

for (let i = 0; i < (ROWS * COLUMNS); i++) {
    let square = document.createElement('div');
    square.classList = 'key';
    square.setAttribute('id', `${i}`);
    container.appendChild(square);
};

// num keys 
let num1 = document.getElementById('0');
num1.innerHTML = '1';
let num2 = document.getElementById('1');
num2.innerHTML = '2';
let num3 = document.getElementById('2');
num3.innerHTML = '3';
let num4 = document.getElementById('4');
num4.innerHTML = '4';
let num5 = document.getElementById('5');
num5.innerHTML = '5';
let num6 = document.getElementById('6');
num6.innerHTML = '6';
let num7 = document.getElementById('8');
num7.innerHTML = '7';
let num8 = document.getElementById('9');
num8.innerHTML = '8';
let num9 = document.getElementById('10');
num9.innerHTML = '9';
let num0 = document.getElementById('12');
num0.innerHTML = '0';
// operator keys
let addKey = document.getElementById('3');
addKey.innerHTML = '+';
let subKey = document.getElementById('7');
subKey.innerHTML = '-';
let divKey = document.getElementById('11');
divKey.innerHTML = '÷';
let multKey = document.getElementById('15');
multKey.innerHTML = 'x'
let equalsKey = document.getElementById('13');
equalsKey.innerHTML = '=';
let clearKey = document.getElementById('14');
clearKey.innerHTML = 'AC';

// Main operations
function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
function operate(operation, a, b) {
    //take main operation for id passed and pass a b to the selected operation
}




//id 0 1 2 4 5 6 8 9 10 12 correspond to number keys
const numberKeys = [0, 1, 2, 4, 5, 6, 8, 9, 10, 12]
//id 3 7 11 13 14 15 correspond to operator keys
const operatorKeys = [3, 7, 11, 13, 14, 15];
const equalKey = 13;

const variableOne = 0;
const variableTwo = 0;
let operationID = 0;

const squares = document.querySelectorAll('.key');
squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (numberKeys.find(Element => Element == square.id) != undefined) {
            varOne = true;
            display.innerHTML = 'Number key'
        }
        else if (square.id == equalKey) {
            if (operationID != 0) {
                //this means an operation key has been inputted
            }
        }
        else {
            operationID = square.id;
        }
        //display.innerHTML = square.id;
    });
});