import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isThemeMode, setIsThemeMode] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : false
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isThemeMode));
  }, [isThemeMode]);

  return (
    <ThemeContext.Provider
      value={{
        isThemeMode,
        setIsThemeMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
