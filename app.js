// Generate calculator keys
const container = document.querySelector('#keys');
const display = document.querySelector('#display')

const ROWS = 5;
const COLUMNS = 4;
container.style.setProperty('--grid-rows', ROWS);
container.style.setProperty('--grid-cols', COLUMNS);

for (let i = 0; i < (ROWS * COLUMNS); i++) {
    let square = document.createElement('div');
    square.classList = 'key';
    square.setAttribute('id', `${i}`);
    container.appendChild(square);
};

// Key Mapping

let para1 = document.getElementById('0');
para1.innerHTML = '(';
let para2 = document.getElementById('1');
para2.innerHTML = ')';
let delKey = document.getElementById('2');
delKey.innerHTML = 'del';
let clearKey = document.getElementById('3');
clearKey.innerHTML = 'AC';
let num7 = document.getElementById('4');
num7.innerHTML = '7';
let num8 = document.getElementById('5');
num8.innerHTML = '8';
let num9 = document.getElementById('6');
num9.innerHTML = '9';
let divKey = document.getElementById('7');
divKey.innerHTML = '÷';
let num4 = document.getElementById('8');
num4.innerHTML = '4';
let num5 = document.getElementById('9');
num5.innerHTML = '5';
let num6 = document.getElementById('10');
num6.innerHTML = '6';
let multKey = document.getElementById('11');
multKey.innerHTML = 'x';
let num1 = document.getElementById('12');
num1.innerHTML = '1';
let num2 = document.getElementById('13');
num2.innerHTML = '2';
let num3 = document.getElementById('14');
num3.innerHTML = '3';
let subKey = document.getElementById('15');
subKey.innerHTML = '-';
let num0 = document.getElementById('16');
num0.innerHTML = '0';
let decKey = document.getElementById('17');
decKey.innerHTML = '.';
let equalKey = document.getElementById('18');
equalKey.innerHTML = '=';
let addKey = document.getElementById('19');
addKey.innerHTML = '+';

// Calculator functionality

const divisionbyzero = "Error! Cannot divide by zero";
// main operations
function addition(a, b) {
    var searchA = a.indexOf('.');
    var searchB = b.search('.');
    if (searchA != -1 || searchB != -1) {
        var floatAnswer = parseFloat(a) + parseFloat(b);
        return floatAnswer.toString();
    }
    else {
        var intAnswer = parseInt(a) + parseInt(b);
        return intAnswer.toString();
    }
}
function subtraction(a, b) {
    var searchA = a.indexOf('.');
    var searchB = b.search('.');
    if (searchA != -1 || searchB != -1) {
        var floatAnswer = parseFloat(a) - parseFloat(b);
        return floatAnswer.toString();
    }
    else {
        var intAnswer = parseInt(a) - parseInt(b);
        return intAnswer.toString();
    }
}
function multiplication(a, b) {
    var searchA = a.indexOf('.');
    var searchB = b.search('.');
    if (searchA != -1 || searchB != -1) {
        var floatAnswer = parseFloat(a) * parseFloat(b);
        return floatAnswer.toString();
    }
    else {
        var intAnswer = parseInt(a) * parseInt(b);
        return intAnswer.toString();
    }
}
function division(a, b) {
    var searchA = a.indexOf('.');
    var searchB = b.search('.');
    if (searchA != -1 || searchB != -1) {
        var floatAnswer = parseFloat(a) / parseFloat(b);
        return floatAnswer.toString();
    }
    else {
        var intAnswer = parseInt(a) / parseInt(b);
        return intAnswer.toString();
    }
}
function solve (operatorsArray, variablesArray) {
    var search;
    var a;
    var b;
    var solution;
    while (operatorsArray.length != 0) {
        search = operatorsArray.indexOf('*');
        if (search != -1) {
            a = variablesArray[search];
            b = variablesArray[search + 1];
            solution = multiplication(a, b);
            operatorsArray.splice(search, 1);
            variablesArray[search] = solution;
            variablesArray.splice(search + 1, 1);
        }
        search = operatorsArray.indexOf('/');
        if (search != -1) {
            a = variablesArray[search];
            b = variablesArray[search + 1];
            solution = division(a, b);
            operatorsArray.splice(search, 1);
            variablesArray[search] = solution;
            variablesArray.splice(search + 1, 1);
        }
        search = operatorsArray.indexOf('+');
        if (search != -1) {
            a = variablesArray[search];
            b = variablesArray[search + 1];
            solution = addition(a, b);
            operatorsArray.splice(search, 1);
            variablesArray[search] = solution;
            variablesArray.splice(search + 1, 1);
        }
        search = operatorsArray.indexOf('-');
        if (search != -1) {
            a = variablesArray[search];
            b = variablesArray[search + 1];
            solution = subtraction(a, b);
            operatorsArray.splice(search, 1);
            variablesArray[search] = solution;
            variablesArray.splice(search + 1, 1);
        }
    }
    var answer = variablesArray[0];
    variablesArray.pop();
    return answer;
}

// main function
function operate(operationString) {
    operationString = operationString.trim();
    var operators = [];
    var variables = [];
    var subOperators = [];
    var subVariables = [];
    var subSolution;
    var solution;
    var start;
    var end;
    var variable = "";
    for (let i = 0; i < operationString.length; i++) {
        if (parseInt(operationString.charCodeAt(i)) >= 48 || parseInt(operationString.charCodeAt(i)) == 46) {
            var num = operationString[i];
            variable = variable.concat("", num);
            if (i == operationString.length - 1) {
                variables.push(variable);
            }
        }
        else {
            if (operationString.charCodeAt(i) != 32) {
                if (operationString.charCodeAt(i) != 40 && operationString.charCodeAt(i) != 41) {
                    variables.push(variable);
                    variable = ""; 
                } 
                operators.push(operationString[i]);
            }
        }
    }
    // check for parenthesis and solve first
    start = operators.indexOf('(');
    while (start != -1) {
        console.log(start);
        end = operators.indexOf(')');
        console.log(end);
        for (let i = start + 1; i < end; i++) {
            subOperators.push(operators[i]);
        }
        for (let i = start; i < end; i ++) {
            subVariables.push(variables[i]);
        }
        subSolution = solve(subOperators, subVariables);
        operators.splice(start, end + 1 - start);
        variables[start] = subSolution;
        variables.splice(start + 1, end - 1 - start);
        start = operators.indexOf('('); 
    }
    // solve equation
    solution = solve(operators, variables);
    return solution;
}

// Display functionality 
let decKeyPressed = false;
let displayString = "";
const squares = document.querySelectorAll('.key');
squares.forEach((square) => {
    square.addEventListener('click', () => {
        switch(parseInt(square.id)) {
            case 0:
                displayString = displayString.concat("", '(');
                if (decKeyPressed) {
                    decKeyPressed = false;
                }
                break;
            case 1:
                displayString = displayString.concat("", ')');
                if (decKeyPressed) {
                    decKeyPressed = false;
                }
                break;
            case 2:
                if (displayString[displayString.length - 1] === '.') {
                    displayString = displayString.slice(0, -1);
                    decKeyPressed = false;
                }
                else {
                    displayString = displayString.slice(0, -1)
                }
                break;
            case 3:
                displayString = "";
                decKeyPressed = false;
                break;
            case 4:
                displayString = displayString.concat("", '7')
                break;
            case 5:
                displayString = displayString.concat("", '8');
                break;
            case 6:
                displayString = displayString.concat("", '9');
                break;
            case 7:
                displayString = displayString.concat(" ", '/ ');
                if (decKeyPressed) {
                    decKeyPressed = false;
                }
                break;
            case 8:
                displayString = displayString.concat("", '4');
                break;
            case 9:
                displayString = displayString.concat("", '5');
                break;
            case 10:
                displayString = displayString.concat("", '6');
                break;
            case 11:
                displayString = displayString.concat(" ", '* ');
                if (decKeyPressed) {
                    decKeyPressed = false;
                }
                break;
            case 12:
                displayString = displayString.concat("", '1');
                break;
            case 13:
                displayString = displayString.concat("", '2');
                break;
            case 14:
                displayString = displayString.concat("", '3');
                break;
            case 15:
                displayString = displayString.concat(" ", '- ');
                if (decKeyPressed) {
                    decKeyPressed = false;
                }
                break;
            case 16:
                displayString = displayString.concat("", '0');
                break;
            case 17:
                if (!decKeyPressed) {
                    displayString = displayString.concat("", '.');
                    decKeyPressed = true;
                }
                break;
            case 18:
                let answer = operate(displayString);
                displayString = answer;
                break;
            case 19:
                displayString = displayString.concat(" ", '+ ');
                if (decKeyPressed) {
                    decKeyPressed = false;
                }
                break;
        }
        display.innerHTML = displayString;
    });
});