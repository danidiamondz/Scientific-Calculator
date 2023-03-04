function updateDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function clearEntry() {
    var display = document.getElementById("display").value;
    document.getElementById("display").value = display.substr(0, display.length - 1);
}

function calculate() {
    var expression = document.getElementById("display").value;
    var result = eval(expression);
    document.getElementById("display").value = result;
}
