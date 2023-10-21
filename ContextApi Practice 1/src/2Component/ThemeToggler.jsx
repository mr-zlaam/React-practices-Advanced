import { useContext } from "react";
import { ThemeContext } from "../1Context/ThemeContext";

const ThemeToggler = () => {
  const { mode, setMode } = useContext(ThemeContext);
  const toggleMode = () => {
    setMode((previousState) => {
      return previousState === "DarkMode" ? "LightMode" : "DarkMode";
    });
    if (mode === "LightMode") {
      document.body.style.background = "white";
    } else {
      document.body.style.background = "black";
    }
  };

  return (
    <div className="big_main">
      <div className="main">
        <button className="button" onClick={toggleMode}>
          {mode}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
