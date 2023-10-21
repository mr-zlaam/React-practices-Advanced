import { createContext } from "react";
import ComponentB from "./ComB";
export const MyName = createContext();
const ComponentA = () => {
  return (
    <>
      <div>
        <MyName.Provider value={"Zlaam"}>
          <ComponentB />
        </MyName.Provider>
      </div>
    </>
  );
};

export default ComponentA;
