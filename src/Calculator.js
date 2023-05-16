import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  function handleButtonClick(value) {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperator(value);
      setPreviousValue(parseFloat(displayValue));
      setDisplayValue(value);
    } else if (value === "=") {
      const currentValue = parseFloat(displayValue);
      let result;

      switch (operator) {
        case "+":
          result = previousValue + currentValue;
          break;
        case "-":
          result = previousValue - currentValue;
          break;
        case "*":
          result = previousValue * currentValue;
          break;
        case "/":
          result = previousValue / currentValue;
          break;
        default:
          result = currentValue;
      }

      setDisplayValue(result.toString());
      setPreviousValue(null);
      setOperator(null);
    } else if (value === "C") {
      setDisplayValue("0");
      setPreviousValue(null);
      setOperator(null);
    } else {
      if (displayValue === "0") {
        setDisplayValue(value);
      } else {
        setDisplayValue(displayValue + value);
      }
    }
  }

  return (
    <div className="calculator">
      <div className="calculator-display">{displayValue}</div>
      <div className="calculator-buttons">
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
      </div>
    </div>
  );
}

export default Calculator;
