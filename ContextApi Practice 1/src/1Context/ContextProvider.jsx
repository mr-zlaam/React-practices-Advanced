import { ThemeContext } from "./ThemeContext";
import { useState } from "react";

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("DarkMode");
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
