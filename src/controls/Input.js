import React, { useEffect } from "react";

import "./Input.css";

import { useInputState } from "./lib/kuhnidev";

export default props => {
  const {
    text,
    disabled,
    placeholder,
    setText,
    textColor,
    lineBottomColor,
    fontFamily,
    fontSize
  } = props;

  const [currentText, setCurrentText] = useInputState(text, "");

  if (currentText === undefined || currentText === null || currentText === "") {
    return (
      <input
        style={{
          color: `var(--${textColor || "primary"}`,
          fontFamily: fontFamily,
          fontSize: fontSize,
          boxShadow: "none",
          backgroundColor: "transparent",
          border: "none"
        }}
        className="form-control"
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
        borderBottomColor: `var(--${lineBottomColor || "primary"}`,
        fontWeight: 700
        // -webkit-box-shadow: none;
        // -moz-box-shadow: none;
        // box-shadow: none;
      }}
      className="form-control "
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
