import React, { useCallback, useEffect, useState } from "react";
import { ChildA1 } from "../components/useCallBack/ChildA1";
import ChildA2 from "../components/useCallBack/ChildA2";

const UseCallBack: React.FC = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("UseCallBack rendered...");
  });

  const handleClick = useCallback(() => {
    return count + 1;
  }, [count]);

  return (
    <>
      <ChildA1 handleClick={handleClick} />
      <ChildA2 />
      <div>
        <button onClick={() => setCount(count + 1)}>
          calling button 1 {count}
        </button>
        <button onClick={() => setCount2(count2 + 1)}>
          calling button 2 {count2}
        </button>
      </div>
    </>
  );
};

export default UseCallBack;
