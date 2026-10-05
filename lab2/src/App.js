import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Movie from "./Movie";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      <Movie />
    </ThemeContext.Provider>
  );
}

export default App;


