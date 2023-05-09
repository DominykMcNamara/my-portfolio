import React, { useState } from "react";
import NavBar from "../components/NavBar";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <div className="min-h-screen bg-purple">
      <h1 className="text-skyblue font-serif">Hello world!</h1>
    </div>
  );
}

export default App;
