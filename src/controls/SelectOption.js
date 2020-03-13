import React from "react";
import { useInputState } from "./lib/kuhnidev";
export default props => {
  const {
    value,
    textColor,
    opciones,
    setText,
    fontFamily,
    fontSize,
    lineBottomColor
  } = props;

  const [currentText, setCurrentText] = useInputState(value, "");
  console.log("currentText Select", currentText);

  if (value === undefined || value === null || value === "") {
    return (
      <select
        value={currentText || ""}
        className="form-control mt-2"
        style={{
          borderBottomColor: `var(--${textColor || "primary"}`,
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: `var(--${textColor || "primary"}`,
          boxShadow: "none",
          backgroundColor: "transparent",
          border: "none"
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
          opciones.map(({ value, label }, index) => {
            return (
              <option
                key={`opt${index}`}
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
      value={currentText || ""}
      className="form-control mt-2"
      style={{
        borderRight: "none",
        borderLeft: "none",
        borderTop: "none",
        backgroundImage: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottomColor: `var(--${lineBottomColor || "primary"}`,
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: `var(--${textColor || "primary"}`,
        fontWeight: 700
      }}
      onChange={e => {
        const opcionSelecionada = opciones.filter(
          optn => optn.value === e.target.value
        )[0];
        // onChangeSelect(opcionSelecionada);
        console.log("opcionSelecionada", opcionSelecionada);
        if (setText) setText(opcionSelecionada);
      }}
    >
      {opciones ? (
        opciones.map(({ value, label }, index) => {
          return (
            <option
              key={`opt${index}`}
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
