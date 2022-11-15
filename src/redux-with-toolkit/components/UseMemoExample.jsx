import React, { useMemo, useState } from "react";

//Compute expensive value
const factorial = (n) => {
  if (n < 0) {
    return -1;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

export const UseMemoExample = () => {
  const [counter, setCounter] = useState(1);
//   const [counter2, setCounter2] = useState(1);

  const result = useMemo(() => {
    return factorial(counter);
  }, [counter]);

  return (
    <div>
      <h3>Factorial Counter</h3>
      <div>
        Factorial of {counter} is: {result}
      </div>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
      {/* <div>
        <h3>Another Counter</h3>
        <p>Another counter Vaue {counter2}</p>
        <button onClick={() => setCounter2(counter2 - 1)}>-</button>
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
      </div> */}
    </div>
  );
};
