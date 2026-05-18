let display = document.getElementById('display');

function appendValue(value) {
  if (display.value === '0') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '0';
}

function deleteLast() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
    setTimeout(() => clearDisplay(), 1000);
  }
}
