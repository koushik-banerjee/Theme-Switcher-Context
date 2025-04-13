import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
4;
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const App = () => {
  const [ThemeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };
  useEffect(() => {
    const selector = document.querySelector("html");
    selector.classList.remove("light", "dark");
    selector.classList.add(ThemeMode);
    const body = document.body;
    if (ThemeMode === "light") {
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#000000";
    } else {
      body.style.backgroundColor = "#121212";
      body.style.color = "#ffffff";
    }
  }, [ThemeMode]);
  return (
    <ThemeProvider value={{ ThemeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
