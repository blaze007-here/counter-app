import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  const Reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p id="counter">{counter}</p>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Increment}>Increment</button>
      
      
    </div>
  );
};

export default App;
