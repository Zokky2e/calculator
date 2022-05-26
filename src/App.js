import { useState } from "react";
import Keypad from "./Components/Keypad";
import Textfield from "./Components/Textfield";
import classes from "./App.module.css";

function App() {
  const [symbol, setSymbol] = useState("");
  
  return (
    <div className={classes.calculator}>
      <Textfield value={symbol}/>
      <Keypad updateTextField ={setSymbol}/>
    </div>
  );
}

export default App;
