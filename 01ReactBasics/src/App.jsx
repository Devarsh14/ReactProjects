import { useState } from "react";
import "./App.css";

// example of use state hook & change propagation.
// max value you can increase is 20
// min value you can decrease is 0
function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("add value");
    // counter++;
    if (counter <= 20) {
      setCounter(counter + 1);
    }

    console.log(counter);
  };

  const removeValue = () => {
    console.log("remove value");
    if (counter > 0) {
      setCounter(counter - 1);
    }

    console.log(counter);
  };

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
