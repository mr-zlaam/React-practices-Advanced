import {} from "react";
import "./App.css";
import ThemeToggler from "./2Component/ThemeToggler";
import { ThemeContextProvider } from "./1Context/ContextProvider";

const App = () => {
  return (
    <ThemeContextProvider>
      <div>
        <ThemeToggler />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
