import React, { useState, useEffect } from "react";
import RoundIcon from "./RoundIcon";
import Text from "./Text";
export default props => {
  const { children, title, fontSize, fontFamily, hiddenValue } = props;

  useEffect(() => {
    setCurrentHidden(hiddenValue);
  }, [hiddenValue]);

  const [currentHidden, setCurrentHidden] = useState(false);

  return (
    <div className={`container-fluid border myshadow p-2 my-2`}>
      <div className="float-right m-2">
        {currentHidden && (
          <RoundIcon
            icon="chevron-down"
            s
            mode="primary"
            onClick={e => {
              setCurrentHidden(!currentHidden);
            }}
          />
        )}
        {!currentHidden && (
          <RoundIcon
            icon="chevron-up"
            mode="primary"
            onClick={e => {
              setCurrentHidden(!currentHidden);
            }}
          />
        )}
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <Text
            fontFamily={fontFamily}
            fontSize={fontSize}
            text={title || "Sin titulo"}
            icon="question"
            mode="dark"
          />
        </div>
        <div className="col-12 col-md-4">
          <span className="text-primary"> Algun texto ...</span>
        </div>
      </div>
      <div className="col-12 mb-2" hidden={currentHidden}>
        {children}
      </div>
    </div>
  );
};
