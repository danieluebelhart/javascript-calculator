var result = "0";
var storedValue = 0;
var operator = ""

//Clear
function ce() {
  storedValue = 0;
  result = 0;
  operator = "";
  document.getElementById("result").innerHTML = result;
  document.getElementById("storedValue").innerHTML = "";
  document.getElementById("operator").innerHTML = "";
}

//Num Pad
function digit0() {
  result = parseFloat(result + "0");
  document.getElementById("result").innerHTML = result;
}
function digit1() {
  result = parseFloat(result + "1");
  document.getElementById("result").innerHTML = result;
}
function digit2() {
  result = parseFloat(result + "2");
  document.getElementById("result").innerHTML = result;
}
function digit3() {
  result = parseFloat(result + "3");
  document.getElementById("result").innerHTML = result;
}
function digit4() {
  result = parseFloat(result + "4");
  document.getElementById("result").innerHTML = result;
}
function digit5() {
  result = parseFloat(result + "5");
  document.getElementById("result").innerHTML = result;
}
function digit6() {
  result = parseFloat(result + "6");
  document.getElementById("result").innerHTML = result;
}
function digit7() {
  result = parseFloat(result + "7");
  document.getElementById("result").innerHTML = result;
}
function digit8() {
  result = parseFloat(result + "8");
  document.getElementById("result").innerHTML = result;
}
function digit9() {
  result = parseFloat(result + "9");
  document.getElementById("result").innerHTML = result;
}

//Operations
function addition() {
  storedValue = parseFloat(result);
  result = 0;
  operator = "+";
  document.getElementById("result").innerHTML = result;
  document.getElementById("storedValue").innerHTML = storedValue;
  document.getElementById("operator").innerHTML = "&nbsp;+";
}
function subtraction() {
  storedValue = parseFloat(result);
  result = 0;
  operator = "-";
  document.getElementById("result").innerHTML = result;
  document.getElementById("storedValue").innerHTML = storedValue;
  document.getElementById("operator").innerHTML = "&nbsp;-";
}
function multiplication() {
  storedValue = parseFloat(result);
  result = 0;
  operator = "*";
  document.getElementById("result").innerHTML = result;
  document.getElementById("storedValue").innerHTML = storedValue;
  document.getElementById("operator").innerHTML = "&nbsp;x";
}
function division() {
  storedValue = parseFloat(result);
  result = 0;
  operator = "/";
  document.getElementById("result").innerHTML = result;
  document.getElementById("storedValue").innerHTML = storedValue;
  document.getElementById("operator").innerHTML = "&nbsp;/";
}

//Equals
function equals() {
  if (operator === "+") {
    result = storedValue + result;
  } else if (operator === "-") {
    result = storedValue - result;
  } else if (operator === "*") {
    result = storedValue * result;
  } else if (operator === "/") {
    result = storedValue / result;
  }
  operator = "";
  storedValue = 0;
  document.getElementById("result").innerHTML = result;
  document.getElementById("storedValue").innerHTML = "";
  document.getElementById("operator").innerHTML = "";
}
