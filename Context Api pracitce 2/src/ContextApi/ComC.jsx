import { useContext } from "react";
import { MyName } from "./CompA";

const ComponentC = () => {
  const Name = useContext(MyName);
  return (
    <>
      <div className="font-[700] text-5xl">
        Hello My Name is Component C. But only few People know that i love to
        called by my favourite name
        <span className="text-blue-500 font-extrabold text-center block my-5">
          {Name}.
        </span>
      </div>
    </>
  );
};

export default ComponentC;
