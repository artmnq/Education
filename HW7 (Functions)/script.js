const multiplication = (firstNum, secondNum) => firstNum * secondNum;
const division = (firstNum, secondNum) => firstNum / secondNum;
const addition = (firstNum, secondNum) => firstNum + secondNum;
const takingAway = (firstNum, secondNum) => firstNum - secondNum;

function miniCalculator() {
    const num1 = +prompt('Enter your first number');
    const operation = prompt('Enter arithmetic operation ("+", "-", "*", "/")');
    const num2 = +prompt('Enter your second number');
    if (!(isNaN(num1)) && !(isNaN(num2))) {
        if (operation === "+") {
            alert(addition(num1, num2));
        }
        else if (operation === "-") {
            alert(takingAway(num1, num2));
        }
        else if (operation === "*") {
            alert(multiplication(num1, num2));
        }
        else if (operation === "/") {
            alert(division(num1, num2));
        }
        else {
            alert('Operation is not allowed');
        }
    } else {
        alert('Please, write number!');
    }
}

miniCalculator();
