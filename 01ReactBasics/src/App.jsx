import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("add value");
    // counter++;
    setCounter(counter + 1);
    console.log(counter);
  };

  const removeValue = () =>{
    console.log("remove value");
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    <>
      Fist react project
      <h1> Hello World</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove value {counter}</button>
      footer: {counter}
    </>
  );
}

export default App;
