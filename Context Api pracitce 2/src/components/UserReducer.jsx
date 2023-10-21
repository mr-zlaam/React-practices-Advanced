import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "Add") return state + 1;
  return state === 0 ? 0 : state - 1;
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <button className="button" onClick={() => dispatch({ type: "Add" })}>
          Increament
        </button>
        <p className="number">{state}</p>
        <button className="button" onClick={() => dispatch({ type: "Minus" })}>
          Decreamentt
        </button>
      </div>
    </>
  );
};

export default UseReducer;
