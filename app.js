let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "", count = 0;
screen.disabled = true;
screen.value = 0;

for (let item of buttons) {
  if (count > 0) {
    screenValue = 0;
    screen.value = 0;
    buttonText = 0;
  }
  item.addEventListener("click", (e) => {
      console.log(count);
    // an event has a target property that gets the value
    buttonText = e.target.innerText; // buttonText is that value of the clicked button [target points to the value]
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText; // to input another input after previous 
      // inputs will be joined
      screen.value = screenValue; // * will be displayed on the screen
    } else if (buttonText == "C") {
      screenValue = 0; // if C is pressed, variable screenValue is set to empty
      screen.value = screenValue; // screen is clear
    } else if (buttonText == "=") {
      try {
        screen.value = eval(screenValue);
        count++;
      } catch (e) {
        screen.value = e.name;
      }
    } else {
      // for the rest of the buttons
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}