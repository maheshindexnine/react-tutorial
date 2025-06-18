import React, { useMemo, useState } from "react";

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    // do nothing
  }
  return num * 2;
};

const UseMemo: React.FC = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => expensiveCalculation(count), [count]); // if count is changed, result will be recalculated

  return (
    <div>
      <p>result: {result}</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>UPDATE</button>
    </div>
  );
};

export default UseMemo;
