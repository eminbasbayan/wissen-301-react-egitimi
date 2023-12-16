import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isThemeMode, setIsThemeMode] = useState(false);
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
