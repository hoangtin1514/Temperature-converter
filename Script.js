function checkInput(Value){
  //Regex test float number /^[+-]?\d+(\.\d+)?$/
  return Value.match(/^[+-]?\d+(\.\d+)?$/)
}

function convert(){
  var inputValue = document.getElementById("input").value;
  if (checkInput(inputValue)){
    var fromUnitValue = document.getElementById("fromUnit").value;
    var toUnitValue = document.getElementById("toUnit").value;

    var result;

    if (toUnitValue === fromUnitValue)
      result = inputValue;

    if (fromUnitValue === "1" && toUnitValue === "2")
        result = inputValue * 33.8;
    if (fromUnitValue === "1" && toUnitValue === "3")
        result = inputValue + 273.15;
    if (fromUnitValue === "2" && toUnitValue === "1")
      result = inputValue / 33.8;
    if (fromUnitValue === "2" && toUnitValue === "3")
      result = inputValue + 457.87;
    if (fromUnitValue === "3" && toUnitValue === "1")
      result = inputValue - 273.15;
    if (fromUnitValue === "3" && toUnitValue === "2")
      result = inputValue - 457.87;
    document.getElementById("Result").innerHTML = "Result: " + result;
  }
  else {
    document.getElementById("Result").innerHTML = "Result: ";
  }
}
