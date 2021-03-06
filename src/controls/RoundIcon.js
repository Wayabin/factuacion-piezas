import React, { useState, useEffect } from "react";

export default props => {
  const { size, mode, icon, tooltip, ...other } = props;

  let sized = size ? size : "22px";

  if (size === "1x") sized = "28px";
  else if (size === "2x") sized = "48px";

  return (
    <div
      className={` icon-${mode || "primary"}`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: sized,
        height: sized,
        border: `1px solid var(--${mode})`,
        borderRadius: "50%"
      }}
      onClick={event => {
        if (props.onClick) props.onClick(event);
      }}
    >
      <span>
        <i
          data-placement="top"
          title={tooltip || ""}
          data-toggle="tooltip"
          className={`fas fa-${icon || "cube"} fa-${sized || "1x"}`}
          // style={{
          //   color: `var(--${mode}`
          // }}
        />
      </span>
    </div>
  );
};
