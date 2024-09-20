// capture a users button input (create event listeners for buttons and different button types)
const buttonsContainer = document.querySelector("#buttons-container")
const displayLine1 = document.querySelector("#display-line-1");
const displayLine2 = document.querySelector("#display-line-2");
const acBtn = document.querySelector("#ac");
const backspaceBtn = document.querySelector("#backspace");

let val1 = null;
let op = null;
let val2 = null;

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => y === 0 ? "Nope." : x / y;

let operate = (func, val) => {
    let displayStr1 = displayLine1.textContent;
    let displayStr2 = displayLine2.textContent;
    let displayStrArr = displayStr2.split("");

    if (func === "num") {
        // handle decimal point
        if (val === ".") {
            let decCount = displayStrArr.filter((char) => char === ".");
            if (decCount < 1) {
                displayStr2 += val;
            }
        } else if (op === null) {
            if (val1 === null) {
                displayStr2 = val;
            } else {
                displayStr2 += val;
            }
            val1 = Number(displayStr2);
        } else {
            if (val2 === null) {
                displayStr2 = val;
            } else {
                displayStr2 += val;
            }
            val2 = Number(displayStr2);
        }

    } else if (func === "backspace") {
        if (displayStr2.length !== 1) {
            displayStr2 = displayStr2.slice(0, -1);
            if (val2 === null) {
                val1 = Number(displayStr2)
            } else {
                val2 = Number(displayStr2)
            }
        }
        else {
            displayStr2 = "0";
            if (val2 === null) {
                val1 = Number(displayStr2)
            } else {
                val2 = Number(displayStr2)
            }
        }

        // when an operator is selected, store the current value in memory and reset the display.
    } else if (func === "op") {
        val1 = Number(displayStr2);
        op = val;
        displayStr1 = `${val1} ${op}`
        val2 = null;
    } else if (func === "eval") {
        if (val1 === null || val2 === null) {
            return;
        }
        switch (op) {
            case "/":
                displayStr1 = `${val1} ${op} ${val2} =`
                displayStr2 = divide(val1, val2);
                break;
            case "x":
                displayStr1 = `${val1} ${op} ${val2} =`
                displayStr2 = multiply(val1, val2);
                break;
            case "-":
                displayStr1 = `${val1} ${op} ${val2} =`
                displayStr2 = subtract(val1, val2);
                break;
            case "+":
                displayStr1 = `${val1} ${op} ${val2} =`
                displayStr2 = add(val1, val2);
                break;
            default:
                val1 = val1;
                break;
        }
        val1 = displayStr2;
    } else if (func === "clear") {
        val1 = null;
        op = null
        val2 = null;
        displayStr2 = "0";
        displayStr1 = "";
    } else if (func === "fancy") {
        op = val;
        switch (op) {
            case "invert":
                val1 = multiply(val1, -1);
                displayStr2 = val1;
                break;
            case "%":
                val1 = divide(val1, 100);
                displayStr2 = val1;
                break;
            default:
                break;
        }
    }
    displayLine1.textContent = displayStr1;
    displayLine2.textContent = displayStr2;

    console.log(`val1: ${val1}`);
    console.log(`op: ${op}`);
    console.log(`val2: ${val2}`);

}

// define button ops as a map
const buttonOperations = {
    "ac": ["clear", "ac"],
    "backspace": ["backspace", "backspace"],
    "invert": ["fancy", "invert"],
    "percentage": ["fancy", "%"],
    "zero": ["num", "0"],
    "one": ["num", "1"],
    "two": ["num", "2"],
    "three": ["num", "3"],
    "four": ["num", "4"],
    "five": ["num", "5"],
    "six": ["num", "6"],
    "seven": ["num", "7"],
    "eight": ["num", "8"],
    "nine": ["num", "9"],
    "decimal": ["num", "."],
    "divide": ["op", "/"],
    "multiply": ["op", "x"],
    "subtract": ["op", "-"],
    "add": ["op", "+"],
    "special": ["special", "😊"],
    "submit": ["eval", "="]
};

// handle click events for HTML buttons
buttonsContainer.addEventListener("click", (event) => {
    const operation = buttonOperations[event.target.id];
    if (operation) {
        operate(...operation);
    }
});

// handle keyboard events
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
    }

    if (event.key >= '0' && event.key <= '9') {
        operate("num", event.key);
    } else {
        const keyboardOperations = {
            "Enter": ["eval", "="],
            "Backspace": ["backspace", "backspace"],
            "Escape": ["clear", "ac"],
            ".": ["num", "."],
            "/": ["op", "/"],
            "*": ["op", "x"],
            "-": ["op", "-"],
            "+": ["op", "+"],
            "%": ["fancy", "%"]
        };
        const keyboardOperation = keyboardOperations[event.key];
        if (keyboardOperation) {
            operate(...keyboardOperation);
        }
    }
});
