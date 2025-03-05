import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import Toggle from "./Toggle"; // Import Toggle

export default function Footer({ theme, toggleTheme }) {
  return (
    <div className="footer-div">
      <Fade>
        <div className="footer-content">
          <p className="theme-text" style={{ color: theme.secondaryText }}>
            Toggle Theme
          </p>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </Fade>
    </div>
  );
}
