import React, { useEffect, useState } from "react";
import classes from "./Textfield.module.css";
function Textfield(props) {
  const [text, updateText] = useState("");

  function isDigit(digit) {
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var flag = 0;
    digits.forEach((element) => {
      if (element.toString() === digit) {
        flag = 1;
      }
    });

    return flag;
  }

  useEffect(() => {
    function doCalculations() {
      let result = 0;
      let input = text;
      var numbers = [];
      var symbols = [];
      let number = "";
      for (var i = 0; i < input.length; i++) {
        if (isDigit(input[i]) === 1) {
          number += input[i];
          console.log(number);
        } else {
          numbers.push(number);
          number = "";
          symbols.push(input[i]);
        }
      }
      numbers.push(number);


      for (i = 0; i < symbols.length; i++) {
        switch (symbols[i]) {
          case "+":
            result += +numbers[i] + +numbers[i + 1];
            break;
          case "-":
            result += +numbers[i] - +numbers[i + 1];
            break;
          case "×":
            result += +numbers[i] * +numbers[i + 1];
            break;
          case "÷":
            result += +numbers[i] / +numbers[i + 1];
            break;
          default:
            break;
        }
      }
      updateText(result);
    }
    if (props?.value === "C") {
      updateText("");
    } else if (props?.value === "=") {
      doCalculations();
    } else {
      updateText((prevText) => prevText + props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <div className={classes.textField}>
      {text}
      <span className={classes.blinker}>|</span>
    </div>
  );
}
export default Textfield;
