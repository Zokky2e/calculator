import React, { useEffect, useState } from "react";
import classes from "./Textfield.module.css";
function Textfield(props) {
  const [text, updateText] = useState("");

  useEffect(() => {
    if (props?.value === "C") {
      updateText("");
    } else if (props?.value === "=") {
      doCalculations();
    } else {
      updateText((prevText) => prevText + props.value);
    }
  }, [props]);

  function doCalculations(){
    let result=0;
    updateText(result);
  }
  return (
    <div className={classes.textField}>
      {text}
      <span className={classes.blinker}>|</span>
    </div>
  );
}
export default Textfield;
