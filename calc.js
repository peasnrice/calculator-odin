// capture a users button input (create event listeners for buttons and different button types)
const buttonsContainer = document.querySelector("#buttons-container")
const displayLine2 = document.querySelector("#display-line-2");
const acBtn = document.querySelector("#ac");
const backspaceBtn = document.querySelector("#backspace");

let logicHandler = (func, val) => {
    let displayStr = displayLine2.textContent;
    let displayStrArr = displayStr.split("");

    if (func === "num") {
        if (val === ".") {
            let decCount = displayStrArr.filter((char) => char === ".");
            if (decCount < 1) {
                displayStr += val;
            }
        } else if (displayStr === "0" && "num" !== "0") {
            displayStr = val;
        } else {
            displayStr += val;
        }
    } else if (func === "backspace") {
        if (displayStr.length !== 1) { displayStr = displayStr.slice(0, -1); }
        else { displayStr = "0"; }

    }

    displayLine2.textContent = displayStr;

}

buttonsContainer.addEventListener("click", (event) => {
    let target = event.target;

    // capture button input order
    switch (target.id) {
        case "ac":
            logicHandler("clear", "ac");
            break;
        case "backspace":
            logicHandler("backspace", "backspace");
            break;
        case "invert":
            logicHandler("fancy", "invert");
            break;
        case "percentage":
            logicHandler("fancy", "%");
            break;
        case "zero":
            logicHandler("num", "0");
            break;
        case "one":
            logicHandler("num", "1");
            break;
        case "two":
            logicHandler("num", "2");
            break;
        case "three":
            logicHandler("num", "3");
            break;
        case "four":
            logicHandler("num", "4");
            break;
        case "five":
            logicHandler("num", "5");
            break;
        case "six":
            logicHandler("num", "6");
            break;
        case "seven":
            logicHandler("num", "7");
            break;
        case "eight":
            logicHandler("num", "8");
            break;
        case "nine":
            logicHandler("num", "9");
            break;
        case "decimal":
            logicHandler("num", ".");
            break;
        case "divide":
            logicHandler("op", "/");
            break;
        case "multiply":
            logicHandler("op", "x");
            break;
        case "subtract":
            logicHandler("op", "-");
            break;
        case "add":
            logicHandler("op", "+");
            break;
        case "special":
            logicHandler("special", "😊");
            break;
        case "submit":
            logicHandler("eval", "=");
            break;
        default:
            break;
    }

    // swap out backspace and ac button depending on display contents
    if (displayLine2.textContent === "0") {
        acBtn.style.display = "block";
        backspaceBtn.style.display = "none";
    } else {
        acBtn.style.display = "none";
        backspaceBtn.style.display = "block";
    }

});




// display input within display line-2
// if viewing a result display AC button, else show Backspace button(⌫)
// validate input sequence, reject invalid inputs
// write test cases for calc functions
// display result on = (submit)

