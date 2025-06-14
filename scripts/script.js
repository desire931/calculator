// Function to add value to the display
function appendValue(val) {
  document.getElementById("display").value += val;
}

// Function to clear the entire display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Function to delete last character
function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.toString().slice(0, -1);
}

// Function to calculate the result and store in history
function calculate() {
  let display = document.getElementById("display");
  try {
    let res = eval(display.value); // evaluate the expression
    // Create a new list item for history
    let li = document.createElement("li");
    li.textContent = display.value + " = " + res;
    // Add to history list
    document.getElementById("historyList").appendChild(li);
    // Display result
    display.value = res;
  } catch (e) {
    // In case of invalid input
    display.value = "Error";
  }
}

// Function to toggle history visibility
function toggleHistory() {
  let h = document.getElementById("history");
  h.style.display = h.style.display === "none" ? "block" : "none";
}
