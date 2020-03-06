import React, { useEffect } from "react";

import "./Input.css";

import { useInputState } from "./lib/kuhnidev";

export default props => {
  const { text, disabled, placeholder, setText, textColor } = props;

  const [currentText, setCurrentText] = useInputState(text, "");

  return (
    <input
      style={{
        color: `var(--${textColor || "primary"}`
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
