import React, { useState, useEffect } from "react";
import { RoundIcon } from "./RoundIcon";

export default props => {
  const {
    text,
    mode,
    fontSize,
    icon,
    iconMode,
    iconSize,
    fontFamily,
    iconRequiered
  } = props;

  //Estado que permite cambiar el  tamaño de icono
  const [currentIconSize, setCurrentIconSize] = useState("");

  //Estado que permite cambiar si el icono es o no requerido
  const [currentIconRequiered, setCurrentRequiered] = useState("");

  //Estado que permite cambiar el color del icono
  const [currentIconMode, setCurrentIconMode] = useState("");

  //Estado que permite cambiar el icon
  const [currentIcon, setCurrentIcon] = useState("");

  //Estado que permite cambiar el color del texto basado en la plantilla de css boostrap
  const [currentMode, setCurrentMode] = useState("");

  //Estado que permite cambiar el tamaño del Texto
  const [currentFontSize, setCurrentFontSize] = useState("16px");

  // Estado que permite cambiar el texto de la entrada
  const [currentText, setCurrentText] = useState("");

  //Estado que permite cambiar el FontFamily del texto
  const [currentFontFamily, setCurrentFontFamily] = useState("");

  useEffect(() => {
    if (iconSize === undefined || iconSize === null) return;
    setCurrentIconSize(iconSize);
  }, [iconSize]);

  useEffect(() => {
    if (iconRequiered === undefined || iconRequiered === null) return;
    setCurrentRequiered(iconRequiered);
  }, [iconRequiered]);

  useEffect(() => {
    if (fontFamily === undefined || fontFamily === null) return;
    setCurrentFontFamily(fontFamily);
  }, [fontFamily]);

  useEffect(() => {
    if (iconMode === undefined || iconMode === null) return;
    setCurrentIconMode(iconMode);
  }, [iconMode]);
  useEffect(() => {
    if (icon === undefined || icon === null) return;
    setCurrentIcon(icon);
  }, [icon]);

  useEffect(() => {
    if (fontSize === undefined || fontSize === null) return;
    setCurrentFontSize(fontSize);
  }, [fontSize]);

  useEffect(() => {
    if (mode === undefined || mode === null) return;
    setCurrentMode(mode);
  }, [mode]);

  useEffect(() => {
    if (text === undefined || text === null) return;
    setCurrentText(text);
  }, [text]);

  // Vista del control
  return (
    <span className="d-flex">
      <span
        style={{
          fontFamily: currentFontFamily,
          fontSize: currentFontSize
        }}
        className={` d-flex text-${currentMode || "primary"}`}
      >
        {currentText || "Sin texto"}
      </span>
      {currentIconRequiered && (
        <i style={{ fontSize: "inherit" }}>
          <RoundIcon
            icon={currentIcon}
            mode={currentIconMode}
            size={currentIconSize}
          />
        </i>
      )}
    </span>
  );
};
