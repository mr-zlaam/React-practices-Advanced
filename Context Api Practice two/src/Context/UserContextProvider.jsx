import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <UserContext.Provider value={{ counter, setCounter }}>
          {children}
        </UserContext.Provider>
      </div>
    </>
  );
};

export default UserContextProvider;
