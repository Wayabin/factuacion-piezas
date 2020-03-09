import React, { useEffect } from "react";

import "./Input.css";

import { useInputState } from "./lib/kuhnidev";

export default props => {
  console.log("Render Input");
  const {
    text,
    disabled,
    placeholder,
    setText,
    textColor,
    fontFamily,
    fontSize
  } = props;

  const [currentText, setCurrentText] = useInputState(text, "");

  if (text === undefined || text === null || text === "") {
    return (
      <input
        style={{
          color: `var(--${textColor || "primary"}`,
          fontFamily: fontFamily,
          fontSize: fontSize
        }}
        className="form-control mt-2"
        value={currentText}
        disabled={disabled}
        placeholder={placeholder}
        onChange={event => setCurrentText(event.target.value)}
        onKeyPress={event => {
          if (event.key === "Enter") {
            if (setText) setText(currentText);
          }
        }}
      />
    );
  }

  return (
    <input
      style={{
        color: `var(--${textColor || "primary"}`,
        fontFamily: fontFamily,
        fontSize: fontSize,
        // border: "none",
        borderRight: "none",
        borderLeft: "none",
        borderTop: "none",
        backgroundImage: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottomColor: `var(--${textColor || "primary"}`,
        fontWeight: 700
        // -webkit-box-shadow: none;
        // -moz-box-shadow: none;
        // box-shadow: none;
      }}
      className="form-control mt-2"
      value={currentText}
      disabled={disabled}
      placeholder={placeholder}
      onChange={event => setCurrentText(event.target.value)}
      onKeyPress={event => {
        if (event.key === "Enter") {
          if (setText) setText(currentText);
        }
      }}
    />
  );
};
