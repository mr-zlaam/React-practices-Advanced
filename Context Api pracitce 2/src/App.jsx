import {} from "react";
// import UseReducer from "./components/UserReducer";
import "./App.css";
import ComponentA from "./ContextApi/CompA";
const App = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {/* <UseReducer /> */}
        <ComponentA />
      </div>
    </>
  );
};

export default App;
