import { useContext } from "react";
import UserContext from "../Context/UserContext";

const JustCounter = () => {
  let { setCounter, counter } = useContext(UserContext);
  const AddCounter = () => {
    setCounter(counter + 1);
  };
  const RemoveCounter = () => {
    setCounter(counter <= 0 ? (counter = 0) : counter - 1);
  };
  return (
    <>
      <div>
        <button
          className="border border-black px-4 py-1 m-3 bg-transparent font-bold text-[20px]"
          onClick={AddCounter}
        >
          Plus
        </button>
        <button
          className="border border-black px-4 py-1 m-3 bg-transparent font-bold text-[20px]"
          onClick={RemoveCounter}
        >
          Minus
        </button>
      </div>
    </>
  );
};

export default JustCounter;
