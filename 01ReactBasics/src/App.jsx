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
      // this will return only increment of 1 instead of 5
      // reason for this is fabric algo will do batching of setCounter through diff algorithm
      // this all 5 propragation will be done in one go so only 1 will be incremented
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);

      // to resolve this situation we can use below code
      // using callback function of the setCounter state property which is having previous value should be used
      // this is feature of react to use previous value of state property
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);

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
