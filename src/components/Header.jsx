import { useThemeContext } from "../context/providers/ThemeContext";

import "../styles/components/Header.css";

const Header = () => {
  const { darkMode, setDarkMode } = useThemeContext();

  const handleClick = (e) => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1>ReactHooks + Rick And Morty</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "DarkMode" : "LightMode"}
      </button>
    </div>
  );
};

export default Header;
