import React, { useState, useEffect } from "react";

export default props => {
  const { text, checked, setCheck, setUncheck } = props;

  // Estado que permite cambiar el texto de la entrada
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (text === undefined || text === null) return;
    setCurrentText(text);
  }, [text]);

  // Estado que permite cambiar el texto de la entrada
  const [currentChecked, setCurrentChecked] = useState(false);

  useEffect(() => {
    if (checked === undefined || checked === null) return;
    setCurrentChecked(checked);
  }, [checked]);

  // Vista del control
  return (
    <div>
      <input
        type="checkbox"
        checked={currentChecked}
        onChange={event => {
          setCurrentChecked(event.target.checked);
          if (event.target.checked) {
            if (setCheck) setCheck();
            return;
          }
          if (setUncheck) setUncheck();
        }}
      />
      <span className="ml-2">
        {currentText} ({currentChecked ? "activo" : "no activo"})
      </span>
    </div>
  );
};
