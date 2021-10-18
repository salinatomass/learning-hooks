import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (e) => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "DarkMode" : "LightMode"}
      </button>
    </div>
  );
};

export default Header;
