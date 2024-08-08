import { useState, useEffect, useContext, createContext } from "react";

// create context
const ThemeContext = createContext();

// prepare provider
export const ThemeContextProvider = ({ children }) => {
  // state for night mode
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const modeStr = await localStorage.getItem("nightMode");
    if (modeStr !== null) {
      const mode = JSON.parse(modeStr);
      if (mode.night) {
        handleNightMode('dark');
       // setNightMode(true);
      } else {
        handleNightMode('light');
      //  setNightMode(false);
      }
    } else {
      await localStorage.setItem("nightMode", JSON.stringify({ night: false }));
      console.log("nothing here");
    }
  };

  const handleNightMode = async (mode) => {
    if (mode == "light") {
      document.documentElement.classList.remove("dark");
      await localStorage.setItem("nightMode", JSON.stringify({ night: false }));
      setNightMode(false);
    } else {
      document.documentElement.classList.add("dark");
      await localStorage.setItem("nightMode", JSON.stringify({ night: true }));
      setNightMode(true);
    }
  };

  const values = {
    nightMode,
    setNightMode,
    handleNightMode,
  };

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  );
};

//
export const useNightMode = () => {
  return useContext(ThemeContext);
};
