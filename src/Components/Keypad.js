import React from "react";
import classes from "./Keypad.module.css";

function Keypad(props) {
  return (
    <div className={classes.keypad}>
      <button className={classes.clear} onClick={()=>props.updateTextField("C")}>C</button>
      <button className={classes.symbols}onClick={()=>props.updateTextField("(")}>(</button>
      <button className={classes.symbols}onClick={()=>props.updateTextField(")")}>)</button>
      <button className={classes.symbols}onClick={()=>props.updateTextField("÷")}>÷</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("7")}>7</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("8")}>8</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("9")}>9</button>
      <button className={classes.symbols}onClick={()=>props.updateTextField("×")}>×</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("4")}>4</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("5")}>5</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("6")}>6</button>
      <button className={classes.symbols}onClick={()=>props.updateTextField("-")}>-</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("1")}>1</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("2")}>2</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("3")}>3</button>
      <button className={classes.symbols}onClick={()=>props.updateTextField("+")}>+</button>
      <button className={classes.symbols}onClick={()=>props.updateTextField("-")}>+/-</button>
      <button className={classes.numbers}onClick={()=>props.updateTextField("0")}>0</button>
      <button className={classes.symbols}onClick={()=>props.updateTextField(",")}>,</button>
      <button className={classes.equals}onClick={()=>props.updateTextField("=")}>=</button>
    </div>
  );
}

export default Keypad;
