console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let favNum = 9;
let userNum = window.prompt("What number do you guess?");
if (userNum > favNum) {
    console.log("Too high!");
}
else if (userNum < favNum){
    console.log("Too low!");
}
else{
    console.log("Congrats!")
}


// Exercise 2