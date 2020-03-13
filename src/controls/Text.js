import React, { useState, useEffect } from "react";
import RoundIcon from "./RoundIcon";

export default props => {
  const {
    text,
    mode,
    icon,
    iconMode,
    iconSize,
    tooltip,
    fontFamily,
    fontSize,
    iconRequiered
  } = props;

  // Vista del control
  return (
    <span className="d-flex">
      <span
        style={{
          fontFamily: fontFamily,
          fontSize: fontSize
        }}
        className={` d-flex text-${mode || "primary"} mr-2`}
      >
        {text || "Sin texto"}
      </span>
      {iconRequiered && (
        <i style={{ fontSize: "inherit" }}>
          <RoundIcon
            icon={icon}
            mode={iconMode}
            size={iconSize}
            tooltip={tooltip}
          />
        </i>
      )}
    </span>
  );
};
