import React from "react";
import { useProvider } from "../hooks/useProvider";

//* mode-icon
import modeIcon from "../assets/mode-theme.svg";

//*style
import "./ColorSelector.css";

const themeColors = ["#000", "#ff595e", "#f86624", "#4f772d"];

function ColorSelector() {
  const { changeColor, changeMode, mode } = useProvider();

  console.log(mode);

  return (
    <div className="color-selector">
      <div className="mode-selector">
        <img
          src={modeIcon}
          alt="dark/light mode"
          onClick={() => changeMode(mode === "dark" ? "light" : "dark")}
        />
      </div>
      <div className="theme-colors">
        {themeColors.map((color) => (
          <div
            key={color}
            style={{ background: color }}
            onClick={() => changeColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
