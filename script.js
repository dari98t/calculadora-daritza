let display = document.getElementById('result');

// Agregar número al display
function appendNumber(number) {
    display.value += number;
}

// Agregar operador al display
function appendOperator(operator) {
    if (display.value !== '') {
        display.value += operator;
    }
}

// Borrar el display
function clearDisplay() {
    display.value = '';
}

// Borrar último carácter
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calcular el resultado
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
