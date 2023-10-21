import {} from "react";
import JustCounter from "./Components/Counter";
import ViewCounter from "./Components/ViewCounter";
import UserContextProvider from "./Context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <JustCounter />
      <ViewCounter />
    </UserContextProvider>
  );
};

export default App;
