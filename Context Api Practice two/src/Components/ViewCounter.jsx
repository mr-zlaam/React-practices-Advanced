import { useContext } from "react";
import UserContext from "../Context/UserContext";

const ViewCounter = () => {
  const { counter } = useContext(UserContext);
  return (
    <>
      <div>
        <p className="ml-14 font-bold text-3xl">{counter}</p>
      </div>
    </>
  );
};

export default ViewCounter;
