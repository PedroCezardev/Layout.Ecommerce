import React from 'react';
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from '../../assets/website/dark-mode-button.png';

const DarkMode = () => {

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // define tema para localstorege e elemento html
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    const element = document.documentElement; // acesso ao elemento html

    if(theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.remove("dark");
      element.classList.add("light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton} alt="Light Mode"
        className={`
          w-12 cursor-pointer absolute right-0 z-10
          ${theme === "dark" ? "hidden" : "block"}
        `}
      />
      <img src={DarkButton} alt="Dark Mode"
        className={`w-12 cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  )
}

export default DarkMode;