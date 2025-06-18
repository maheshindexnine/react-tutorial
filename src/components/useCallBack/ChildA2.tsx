import { useEffect, useState } from "react";
import { getRandomColor } from "../../utils/common";

const ChildA2: React.FC = () => {
  const [color, setColor] = useState(getRandomColor());
  useEffect(() => {
    console.log("ChildA2 rendered...");
    setColor(getRandomColor());
  });
  return (
    <div>
      ChildA2 not memo
      <div className={`m-10 w-20 h-20 ${color}`}></div>
    </div>
  );
};

export default ChildA2;
