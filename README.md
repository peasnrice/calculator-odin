My Odin Project Calculator Assignment [(See Project: Calculator)](https://www.theodinproject.com/lessons/foundations-calculator)

# Calculator

A simple calculator with an iOS‑style UI and keyboard support. Includes a secondary display that shows the expression being evaluated. Source project from The Odin Project.  

## Features
- Styled to mimic the iOS calculator (2024)
- Click or keyboard input
- backspace to remove last digit
- Secondary display to flip the display upside down to write messages (like we used to do in school)
- Known edge case: divide by zero can lead to NaN, but it's caught and is handle gracefully. 

## Things to improve / add: 
- After dividing by 0 it's currently possible to attempt another calculation, which returns NaN. No bueno.
- 😊 button does nothing at the moment, would like to have this have a quirky function, display a modal or have some other effect. Will revisit once I've finished the course.
- Embed the calculator within my website, when I get there. 

## Tech
- HTML, CSS, JavaScript

## Getting Started
Open `index.html` in a browser, or serve the folder with a static server.

```sh
# example
python3 -m http.server 8080
