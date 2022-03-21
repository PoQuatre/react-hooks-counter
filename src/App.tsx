import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((i) => i + 1);
  const decrementCount = () => setCount((i) => i - 1);

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </>
  );
};
