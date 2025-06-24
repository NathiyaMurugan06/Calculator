let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendValue(key); // Number or operator
  } else if (key === "Enter") {
    calculate(); // Press Enter to calculate
  } else if (key === "Backspace") {
    deleteLast(); // Press Backspace to delete
  } else if (key === "Escape") {
    clearDisplay(); // Press Esc to clear
  }
});
