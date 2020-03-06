import React from "react";
export default props => {
  const { textColor } = props;
  return (
    <select
      className="form-control mt-2"
      style={{
        color: `var(--${textColor || "primary"}`
      }}
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  );
};
