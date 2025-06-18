import React, { useReducer } from "react";

const initialState = { count: 0, status: "Iddle" };

function reducer(state: { count: number, status: string }, action: { type: string }) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, status: "Increment" };
    case "decrement":
      return { count: state.count - 1, status: "Decrement" };
    case "reset":
      return { count: 0, status: "Reset" };
    default:
      return state;
  }
}
const Reducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="w-1/3 mx-auto mt-10">
      <p className="text-center text-2xl font-bold">{state.count}</p>
      <p className="text-center text-2xl font-bold">{state.status}</p>
      <div className="flex gap-3 justify-evenly mt-10">
        <button
          className="bg-green-500"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="bg-green-500"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="bg-green-500"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Reducer;
