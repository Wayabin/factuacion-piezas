import React from "react";
import { useInputState } from "./lib/kuhnidev";
export default props => {
  const { value, textColor, opciones, setText, fontFamily, fontSize } = props;

  const [currentText, setCurrentText] = useInputState(value, "");

  if (value === undefined || value === null || value === "") {
    return (
      <select
        value={currentText || ""}
        className="form-control mt-2"
        style={{
          borderBottomColor: `var(--${textColor || "primary"}`,
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: `var(--${textColor || "primary"}`
        }}
        onChange={e => {
          const opcionSelecionada = opciones.filter(
            optn => optn.value === e.target.value
          )[0];
          setCurrentText(opcionSelecionada);
          if (setText) setText(opcionSelecionada);
        }}
        onKeyPress={event => {
          if (event.key === "Enter") {
            if (setText) setText(currentText);
          }
        }}
      >
        {opciones ? (
          opciones.map(({ value, label }) => {
            return (
              <option
                style={{
                  color: `var(--${textColor || "primary"}`
                }}
                value={value}
              >
                {label}
              </option>
            );
          })
        ) : (
          <option>No hay opciones configuradas</option>
        )}
      </select>
    );
  }

  return (
    <select
      className="form-control mt-2"
      style={{
        borderRight: "none",
        borderLeft: "none",
        borderTop: "none",
        backgroundImage: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottomColor: `var(--${textColor || "primary"}`,
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: `var(--${textColor || "primary"}`
      }}
      onChange={e => {
        console.log(e.target.value);
        const opcionSelecionada = opciones.filter(
          optn => optn.value === e.target.value
        )[0];
        // onChangeSelect(opcionSelecionada);
        console.log("opcionSelecionada", opcionSelecionada);
      }}
    >
      {opciones ? (
        opciones.map(({ value, label }) => {
          return (
            <option
              style={{
                color: `var(--${textColor || "primary"}`
              }}
              value={value}
            >
              {label}
            </option>
          );
        })
      ) : (
        <option>No hay opciones configuradas</option>
      )}
    </select>
  );
};
