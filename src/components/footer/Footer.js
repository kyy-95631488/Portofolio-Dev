import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="theme-text" style={{ color: props.theme.secondaryText }}>
          Toggle Theme
        </p>
      </Fade>
    </div>
  );
}
