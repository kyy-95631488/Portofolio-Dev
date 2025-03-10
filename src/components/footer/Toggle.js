import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
// Import SVG icons
import { ReactComponent as MoonIcon } from "../../assests/images/moon.svg";
import { ReactComponent as SunIcon } from "../../assests/images/sun.svg";

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 1rem;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 5rem;
  height: 2rem;
  outline: none;
  align-items: center;

  svg {
    height: 1.2rem;
    width: auto;
    transition: all 0.3s linear;

    // Sun icon
    &:first-child {
      transform: ${({ theme }) =>
        theme.gradient === "linear-gradient(#39598A, #79D7ED)"
          ? "translateY(0px)"
          : "translateY(100px)"};
    }

    // Moon icon
    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme.gradient === "linear-gradient(#39598A, #79D7ED)"
          ? "translateY(-100px)"
          : "translateY(0)"};
    }
  }
`;

const Toggle = ({ mode, toggleTheme }) => {
  const isLight = mode === "light";
  return (
    <ToggleContainer onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  mode: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
