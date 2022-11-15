import React, { useState } from "react";

export const NormalIncrement = () => {
  const [value, setValue] = useState(0);

  console.log('value', value);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div>
      <h1>NormalIncrement</h1>
      <p>{value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export const MemoizedIncrement = React.memo(NormalIncrement)