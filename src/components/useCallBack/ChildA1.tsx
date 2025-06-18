import React, { memo, useEffect, useState } from "react";
import { getRandomColor } from "../../utils/common";

const ChildA1: React.FC = memo(({ handleClick }) => {
  const [color, setColor] = useState(getRandomColor);
  useEffect(() => {
    console.log("ChildA1 rendered...");
    setColor(getRandomColor());
  });
  return (
    <div>
      ChildA1 used memo
      <div className={`m-10 w-20 h-20 ${color}`}>{handleClick()}</div>
    </div>
  );
});

export { ChildA1 };
